"use client"

import { useEffect, useState } from "react";
import CalendlyLogin from "./CalendlyLogin";

type CalendlyEvent = {
  uri: string;
  name: string;
  start_time: string;
  end_time: string;
  status: string;
  event_type: string;
  location?: {
    type: string;
    location?: string;
  };
};

export default function CalendlyAppointments() {
  const [appointments, setAppointments] = useState<CalendlyEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in URL after OAuth redirect
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code) {
      // Exchange code for token
      fetch('/api/auth/callback?code=' + code)
        .then(res => res.json())
        .then(data => {
          if (data.access_token) {
            setToken(data.access_token);
            localStorage.setItem('calendlyToken', data.access_token);
          }
        })
        .catch(err => console.error('Auth Error:', err));
    } else {
      // Check for existing token
      const savedToken = localStorage.getItem('calendlyToken');
      if (savedToken) setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    fetch("/api/calendly", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // Trier les rendez-vous par date
        const sortedAppointments = (data.collection || []).sort((a: CalendlyEvent, b: CalendlyEvent) => 
          new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
        );
        setAppointments(sortedAppointments);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur Calendly:", err);
        setLoading(false);
      });
  }, [token]);

  if (!token) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📅 Mes Rendez-vous Calendly</h2>
        <CalendlyLogin />
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">📅 Mes Rendez-vous Calendly</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Horaire
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lieu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.length > 0 ? (
                appointments.map((event) => (
                  <tr key={event.uri} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {event.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(event.start_time).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(event.start_time).toLocaleTimeString('fr-FR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                        {' - '}
                        {new Date(event.end_time).toLocaleTimeString('fr-FR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {event.event_type}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {event.location
                          ? event.location.type === 'physical'
                            ? event.location.location
                            : 'Rendez-vous virtuel'
                          : 'Non spécifié'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${event.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'}`}>
                        {event.status === 'active' ? 'Confirmé' : event.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                    Aucun rendez-vous prévu.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
