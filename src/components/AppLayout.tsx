import React from 'react';
import MemberCard from './MemberCard';
import EmergencyAlert from './EmergencyAlert';
import PricingCard from './PricingCard';
import FeatureSection from './FeatureSection';
import { useMembers, useEmergencyAlerts, usePricingPlans, getMockMembers, getMockEmergencyAlerts, getMockPricingPlans } from '@/hooks/useApi';

export default function AppLayout() {
  const heroImage = "https://d64gsuwffb70l.cloudfront.net/68c2a3c3c11b33509e8fc228_1757586406667_9924ff02.webp";
  
  // Fetch data from backend
  const { data: membersData, isLoading: membersLoading, error: membersError } = useMembers();
  const { data: alertsData, isLoading: alertsLoading } = useEmergencyAlerts();
  const { data: pricingData, isLoading: pricingLoading } = usePricingPlans();

  // Fallback to mock data if backend is not configured or fails
  const members = membersData && membersData.length > 0 ? membersData : getMockMembers();
  const emergencyAlerts = alertsData && alertsData.length > 0 ? alertsData : getMockEmergencyAlerts();
  const pricingPlans = pricingData && pricingData.length > 0 ? pricingData : getMockPricingPlans();

  const features = [
    { icon: "shield", title: "Trusted Network", description: "All members are verified and background checked for your peace of mind." },
    { icon: "phone", title: "24/7 Emergency Support", description: "Get help when you need it most with our round-the-clock emergency network." },
    { icon: "users", title: "Community Driven", description: "Connect with fellow pet sitters and build lasting professional relationships." },
    { icon: "globe", title: "Growing Network", description: "Starting in Auckland with plans to expand globally for worldwide coverage." },
    { icon: "heart", title: "Pet-Focused Care", description: "Every member shares a genuine love and commitment to animal welfare." },
    { icon: "clock", title: "Quick Response", description: "Fast emergency notifications ensure pets get the care they need promptly." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">PetSitter Network NZ</h1>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-700 hover:text-blue-600">Find Sitters</button>
              <button className="text-gray-700 hover:text-blue-600">Emergency</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Join Now</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="relative bg-cover bg-center py-24"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Never Let Your Clients Down Again
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join Auckland's trusted pet sitter network. Get emergency backup support when life happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                Join the Network - $15/month
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alerts */}
      <div className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Current Emergency Requests</h2>
          {alertsLoading ? (
            <div className="text-center text-gray-600">Loading emergency requests...</div>
          ) : emergencyAlerts.length > 0 ? (
            emergencyAlerts.map((alert) => (
              <EmergencyAlert
                key={alert.id}
                petName={alert.pet_name}
                petType={alert.pet_type}
                location={alert.location}
                timePosted={new Date(alert.created_at).toLocaleString()}
                urgency={alert.urgency}
                description={alert.description}
                compensation={alert.compensation}
                contactName={alert.contact_name}
              />
            ))
          ) : (
            <div className="text-center text-gray-600">No active emergency requests at the moment.</div>
          )}
        </div>
      </div>

      {/* Features */}
      <FeatureSection
        title="Why Join Our Network?"
        subtitle="Professional pet sitters supporting each other in times of need"
        features={features}
      />

      {/* Member Directory */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Members</h2>
          {membersLoading ? (
            <div className="text-center text-gray-600">Loading members...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member) => (
                <MemberCard 
                  key={member.id} 
                  name={member.name}
                  image={member.image}
                  location={member.location}
                  experience={member.experience}
                  specialties={member.specialties}
                  rating={member.rating}
                  available={member.available}
                  emergencyContact={member.emergency_contact}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Affordable Membership</h2>
          {pricingLoading ? (
            <div className="text-center text-gray-600">Loading pricing plans...</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  title={plan.title}
                  price={plan.price.toString()}
                  period={plan.period}
                  features={plan.features}
                  popular={plan.popular}
                  buttonText={`Choose ${plan.title}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PetSitter Network NZ</h3>
              <p className="text-gray-400">Supporting pet sitters across Auckland and beyond.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Find Sitters</a></li>
                <li><a href="#" className="hover:text-white">Emergency Help</a></li>
                <li><a href="#" className="hover:text-white">Join Network</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Safety Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Auckland, New Zealand</p>
              <p className="text-gray-400">support@petsitternetwork.nz</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PetSitter Network NZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}