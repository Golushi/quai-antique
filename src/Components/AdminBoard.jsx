import React from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UsersPannel from "./admin/UsersPannel";
import HoursPannel from "./admin/HoursPannel";
import EntriesPannel from "./admin/EntriesPannel";
import DishesPannel from "./admin/DishesPannel";
import SpecialitiesPannel from "./admin/SpecialitiesPannel";
import BookingPannel from "./admin/BookingPannel";
import { useState } from "react";

export default function AdminBoard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
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

            <TabList className="grid grid-rows-6">
              <Tab>Utilisateurs</Tab>
              <Tab>Horaires</Tab>
              <Tab>Entrées</Tab>
              <Tab>Plats</Tab>
              <Tab>Spécialités</Tab>
              <Tab>Réservation</Tab>
            </TabList>
          </div>

          {/* Main content */}
          <div className="col-span-3 bg-white h-screen overflow-y-scroll">
            {/* Page title */}
            <h3 className="mb-4 text-xl font-cabin text-gray-800">
              Bienvenue dans l'interface d'administration
            </h3>
            <p className="text-gray-500">
              Veuillez sélectionner une section dans le menu de gauche.
            </p>
            <br />
            <div className="m-2">
              <TabPanel index={0}>
                <UsersPannel />
              </TabPanel>
              <TabPanel index={1}>
                <HoursPannel />
              </TabPanel>
              <TabPanel index={2}>
                <EntriesPannel />
              </TabPanel>
              <TabPanel index={3}>
                <DishesPannel />
              </TabPanel>
              <TabPanel index={4}>
                <SpecialitiesPannel />
              </TabPanel>
              <TabPanel index={5}>
                <BookingPannel />
              </TabPanel>
            </div>
          </div>
        </div>
      </Tabs>
    </>
  );
}
