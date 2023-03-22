import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, Tablist, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UsersPannel from "./admin/UsersPannel";
import HoursPannel from "./admin/HoursPannel";
import EntriesPannel from "./admin/EntriesPannel";

export default function AdminBoard() {
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [showHoursModal, setShowHoursModal] = useState(false);
  const [showEntriesModal, setShowEntriesModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 w-screen fixed z-50">
        {/* Sidebar */}
        <div className="bg-gray-200 col-span-1 h-screen">
          <div className="flex justify-center items-center py-3 shadow-lg">
            <NavLink
              to="/quai-antique"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <button
                className="text-mywhite bg-myyellow active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                Retour
              </button>
            </NavLink>
          </div>
          <nav className="flex flex-col mt-10">
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-300"
              onClick={() => setShowUsersModal(true)}
            >
              Utilisateurs
            </button>
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-300"
              onClick={() => setShowHoursModal(true)}
            >
              Horaires
            </button>
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-300"
              onClick={() => setShowEntriesModal(true)}
            >
              Entrées
            </button>
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-300"
              // onClick={() => setShowPlatsModal(true)}
            >
              Plats
            </button>
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-300"
              // onClick={() => setShowSpecialModal(true)}
            >
              Spécialitées
            </button>
            <button
              className="px-4 py-2 text-gray-700 hover:bg-gray-300"
              // onClick={() => setShowBookingModal(true)}
            >
              Réservations
            </button>
          </nav>
        </div>

        {/* Main content */}
        <div className="col-span-3 bg-white h-screen overflow-y-scroll">
          <div className="px-6 py-6 lg:px-8">
            {/* Page title */}
            <h3 className="mb-4 text-xl font-cabin text-gray-800">
              Bienvenue dans l'interface d'administration
            </h3>
            <p className="text-gray-500">
              Veuillez sélectionner une section dans le menu de gauche.
            </p>
          </div>
        </div>

        {/* Users modal */}
        {showUsersModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6">
              <UsersPannel />

              <button
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={() => setShowUsersModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
        {showHoursModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6">
              <HoursPannel />

              <button
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={() => setShowHoursModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
        {showEntriesModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6">
              <EntriesPannel />

              <button
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                onClick={() => setShowEntriesModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
