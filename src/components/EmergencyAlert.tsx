import React from 'react';

interface EmergencyAlertProps {
  petName: string;
  petType: string;
  location: string;
  timePosted: string;
  urgency: 'high' | 'medium' | 'low';
  description: string;
  compensation: string;
  contactName: string;
}

export default function EmergencyAlert({ 
  petName, 
  petType, 
  location, 
  timePosted, 
  urgency, 
  description, 
  compensation, 
  contactName 
}: EmergencyAlertProps) {
  const urgencyColors = {
    high: 'bg-red-50 border-red-200 text-red-800',
    medium: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    low: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const urgencyBadgeColors = {
    high: 'bg-red-500 text-white',
    medium: 'bg-yellow-500 text-white',
    low: 'bg-blue-500 text-white'
  };

  return (
    <div className={`border-l-4 p-6 rounded-lg ${urgencyColors[urgency]} mb-4`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold">Emergency Pet Sitting Needed</h3>
            <p className="text-sm opacity-75">{timePosted}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${urgencyBadgeColors[urgency]}`}>
          {urgency.toUpperCase()} PRIORITY
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-semibold">Pet Details:</p>
          <p>{petName} ({petType})</p>
        </div>
        <div>
          <p className="font-semibold">Location:</p>
          <p>{location}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="font-semibold mb-2">Description:</p>
        <p className="text-sm">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-semibold">Compensation:</p>
          <p className="text-green-600 font-semibold">{compensation}</p>
        </div>
        <div>
          <p className="font-semibold">Posted by:</p>
          <p>{contactName}</p>
        </div>
      </div>

      <div className="flex space-x-3">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          I Can Help
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Contact Poster
        </button>
      </div>
    </div>
  );
}