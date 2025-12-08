import React from 'react';

interface MemberCardProps {
  name: string;
  image: string;
  location: string;
  experience: string;
  specialties: string[];
  rating: number;
  available: boolean;
  emergencyContact: boolean;
}

export default function MemberCard({ 
  name, 
  image, 
  location, 
  experience, 
  specialties, 
  rating, 
  available, 
  emergencyContact 
}: MemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        {emergencyContact && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Emergency Available
          </div>
        )}
        {available && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Available
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-2 flex items-center gap-2">
          {location && <span className="text-sm">{location}</span>}
          <span className="ml-auto flex flex-wrap gap-2">
            {specialties?.map((item, idx) => (
              <span 
                key={`${item}-${idx}`} 
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </span>
        </p>
        {/* Optional extra: experience and rating here */}
      </div>
    </div>
  );
}