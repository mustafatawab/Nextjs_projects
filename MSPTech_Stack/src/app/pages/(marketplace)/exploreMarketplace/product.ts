import cloudManagement from "@/assets/svgs/ExploreMarketplace/cloudmanagement.svg";
import networking from "@/assets/svgs/ExploreMarketplace/networking.svg";
import security from "@/assets/svgs/ExploreMarketplace/secuirity.svg";
import storage from "@/assets/svgs/ExploreMarketplace/storage.svg";
import os from "@/assets/svgs/ExploreMarketplace/os.svg";

// Featured Apps
import invidia from "@/assets/svgs/ExploreMarketplace/invidia.svg";
import fortinet from "@/assets/svgs/ExploreMarketplace/fortinet.svg";
import vmSeries from "@/assets/svgs/ExploreMarketplace/VMSeries.svg";

// Recent Apps
import oracle from "@/assets/svgs/ExploreMarketplace/oracle.svg";
import resdiary from "@/assets/svgs/ExploreMarketplace/resdiary.svg";
import ethor from "@/assets/svgs/ExploreMarketplace/ethor.svg";
import mondomenu from "@/assets/svgs/ExploreMarketplace/mondomenu.svg";
import oracleSqa from "@/assets/svgs/ExploreMarketplace/oraclesqa.svg";

// Top rated Apps
import opkey from "@/assets/svgs/ExploreMarketplace/opkey.svg";
import fxloader from "@/assets/svgs/ExploreMarketplace/fxloader.svg";
import sso from "@/assets/svgs/ExploreMarketplace/sso.svg";
import motiveAI from "@/assets/svgs/ExploreMarketplace/motive.ai.svg";
import cloudTester from "@/assets/svgs/ExploreMarketplace/cloudTester.svg";
import Header from "@/components/Navbar/Header";

export const products = {
  categories: [
    {
      id: 1,
      image: cloudManagement,
      title: "Cloud Management",
      apps: "70",
      description:
        "Cloud Management unifies data protection and cybersecurity to deliver integrated, automated cyber protection that solves the safety, accessibility, privacy, authenticity, and security (SAPAS) challenges of the modern digital world. With flexible deployment models that fit the demands of service providers and IT professionals, Cloud Management provides superior cyber protection for data, applications, and systems with innovative next-generation antivirus, backup, disaster recovery, and endpoint protection management solutions powered by AI. With advanced anti-malware powered by cutting-edge machine intelligence and blockchain based data authentication technologies, Cloud Management protects any environment from cloud to hybrid to on premises at a low and predictable cost. Founded in Singapore in 2003 and incorporated in Switzerland in 2008, Cloud Management now has more than 2,000 employees and offices in 34 locations worldwide. Its solutions are trusted by more than 5.5 million home users and 500,000 companies, and top-tier professional sports teams. Cloud Management products are available through over 50,000 partners and service providers in over 150 countries and 26 languages.",
    },
    {
      id: 2,
      image: networking,
      title: "Networking",
      apps: "102",
      description:
        " Networking  unifies data protection and cybersecurity to deliver integrated, automated cyber protection that solves the safety, accessibility, privacy, authenticity, and security (SAPAS) challenges of the modern digital world. With flexible deployment models that fit the demands of service providers and IT professionals, Cloud Management provides superior cyber protection for data, applications, and systems with innovative next-generation antivirus, backup, disaster recovery, and endpoint protection management solutions powered by AI. With advanced anti-malware powered by cutting-edge machine intelligence and blockchain based data authentication technologies, Cloud Management protects any environment from cloud to hybrid to on premises at a low and predictable cost. Founded in Singapore in 2003 and incorporated in Switzerland in 2008, Cloud Management now has more than 2,000 employees and offices in 34 locations worldwide. Its solutions are trusted by more than 5.5 million home users and 500,000 companies, and top-tier professional sports teams. Cloud Management products are available through over 50,000 partners and service providers in over 150 countries and 26 languages.",
    },
    {
      id: 3,
      image: security,
      title: "Security",
      apps: "107",
      description:
        "Security unifies data protection and cybersecurity to deliver integrated, automated cyber protection that solves the safety, accessibility, privacy, authenticity, and security (SAPAS) challenges of the modern digital world. With flexible deployment models that fit the demands of service providers and IT professionals, Cloud Management provides superior cyber protection for data, applications, and systems with innovative next-generation antivirus, backup, disaster recovery, and endpoint protection management solutions powered by AI. With advanced anti-malware powered by cutting-edge machine intelligence and blockchain based data authentication technologies, Cloud Management protects any environment from cloud to hybrid to on premises at a low and predictable cost. Founded in Singapore in 2003 and incorporated in Switzerland in 2008, Cloud Management now has more than 2,000 employees and offices in 34 locations worldwide. Its solutions are trusted by more than 5.5 million home users and 500,000 companies, and top-tier professional sports teams. Cloud Management products are available through over 50,000 partners and service providers in over 150 countries and 26 languages.",
    },

    {
      id: 4,
      image: storage,
      title: "Storage",
      apps: "37",
    },
    {
      id: 5,
      image: os,
      title: "Operating System" || "OS",
      apps: "74",
    },
  ],

  featured: [
    {
      id: 6,
      image: invidia,
      title: "NVIDIA AI Enterprise",
      description: "The End To End Software Platform for Production AI",
    },
    {
      id: 7,
      image: invidia,
      title: "NVIDIA DGX Cloud",
      description: "Build your models faster on serverlses AI",
    },

    {
      id: 8,
      image: fortinet,
      title: "FortiGate Next-Gen Firewall (BYOL)",
      description: "Comprehensive Secuirity in One, Simplified Solution",
    },

    {
      id: 9,
      image: vmSeries,
      title: "Palo Alto Netwoking VM-Series Next Generation Firewall",
      description:
        "Protecting applications from threats and stoping data theft",
    },
  ],

  recent: [
    {
      id: 10,
      image: oracle,
      title: "Seibel Cloud Manager (SCM)",
      description: "Seibel Cloud Manager (SCM) - Oracle",
    },

    {
      id: 11,
      image: resdiary,
      title: "ResDiary",
      description: "Achieve in-service efficiency with ResDiary Table",
    },

    {
      id: 12,
      image: ethor,
      title: "eThor",
      description: "Order and Pay at Table Solution for Oracle Food &",
    },

    {
      id: 13,
      image: mondomenu,
      title: "MondoMenu",
      description: "Increase your average order value, improve customer",
    },

    {
      id: 14,
      image: oracleSqa,
      title: "Oracle SOA Suite (PAID)",
      description: "Oracle SOA Suite on Oracle Cloud Infrastructure (OCI)",
    },
  ],

  topRated: [
    {
      id: 15,
      image: opkey,
      title: "Oracle Test Automation from Opkey",
      description:
        "Opkey provides cost savings, reduces risk, and fills gaps in",
    },

    {
      id: 16,
      image: fxloader,
      title: "FXLoader",
      description: "Load Currency Exchange Rates into Oracle ERP Cloud",
    },

    {
      id: 17,
      image: sso,
      title: "ESI JDO SSO",
      description:
        "A better way to do SSO: our  revolutionary SSO solution for",
    },

    {
      id: 18,
      image: motiveAI,
      title: "Motiva AI for Oracle Eloqua",
      description:
        "Generative Artificial Intelligence to supercharge your email",
    },

    {
      id: 19,
      image: cloudTester,
      title: "Cloudtestr",
      description: "Automation and Test Management Software-as-a-Serivice",
    },
  ],
};
