import contolImg1 from "../assets/images/seasonFive/Basic.jpg";
import contolImg2 from "../assets/images/seasonFive/Advanced.jpg";
import contolImg3 from "../assets/images/seasonFive/BoilerRoom.png";
import heating from "../assets/images/heating.png";
import cooling from "../assets/images/cooling.png";
import climatecontrol from "../assets/images/climatecontrol.jpg";
import datadriven from "../assets/images/datadriven.png";
import retrofitting from "../assets/images/retrofitting.png";

export const packagesAndKits = [
  {
    id: 1,
    title: "Planth Growth Package",
    image: "TDSPHP04_Plant_growth_package.original",
    price: 4490,
    information: {
      linkTo: "https://aranet.com/en/pro/products/aranet-plant-growth-package",
      productCode: "TDSPHP04",
      text: [
        "The Plant Growth Package helps maximize photosynthesis and maintain an optimal climate by tracking key factors like photosynthetically active radiation (PAR), vapor pressure deficit (VPD), and humidity, ensuring plants thrive in ideal conditions.",
      ],
      includes: [
        "1 x PRO Plus LTE base station",
        "1 x PoE injector for base station power supply",
        "4 x T/RH IP67 sensor",
        "2 x T/RH sensor with radiation shield",
        "4 x PAR sensor",
        "2 x IR Plant Temperature sensor",
      ],
    },
  },
  {
    id: 2,
    title: "Biomass Gain Package",
    image: "TDSPHP05_Biomass_gain_package.original",
    price: 2825,
    information: {
      linkTo: "https://aranet.com/en/pro/products/aranet-biomass-gain-package",
      productCode: "TDSPHP05",
      text: [
        "Biomass Gain Package provides continuous weight measurements to monitor various plant growth factors, including biomass increase, plant weight, water addition, and drainage weight.",
      ],
      includes: [
        "1 x PRO Plus LTE base station",
        "1 x PoE injector for base station power supply",
        "4 x Weight sensor",
        "6 x T/RH IP67 sensor",
        "2 x T/RH sensor with radiation shield",
      ],
    },
  },
  {
    id: 3,
    title: "Horticulture Research Package",
    image: "TDSPHP06_Horti_research_package.original",
    price: 3570,
    information: {
      linkTo:
        "https://aranet.com/en/pro/products/aranet-horticulture-research-package",
      productCode: "TDSPHP06",
      text: [
        "Horticulture Research Package provides sensors for climate condition and root zone analysis, enabling in-depth studies of how various ambient conditions affect plant health and growth.",
      ],
      includes: [
        "1 x PRO Plus LTE base station",
        "1 x PoE injector for base station power supply",
        "4 x T/RH IP67 sensor",
        "1 x T/RH sensor with radiation shield",
        "1 x IR Plant Temperature sensor",
        "1 x Soil sensor WET150",
        "1 x Drainage sensor kit",
        "1 x CO2 and Temperature sensor",
        "1 x PAR sensor",
        "2 x Soil moisture sensor",
      ],
    },
  },
  {
    id: 4,
    title: "Irrigation Basic Package",
    image: "TDSPHP03_Irrigation_basic_package.original",
    price: 2795,
    information: {
      linkTo:
        "https://aranet.com/en/pro/products/aranet-irrigation-basic-package",
      productCode: "TDSPHP03",
      text: [
        "The Irrigation Basic Package includes essential sensors to monitor soil moisture, temperature, and relative humidity, ensuring optimal climate conditions and efficient fertilizer use.",
      ],
      includes: [
        "1 x PRO Plus LTE base station",
        "1 x PoE injector for base station power supply",
        "4 x Soil moisture sensor",
        "2 x Soil sensor WET150",
        "2 x T/RH IP67 sensor",
        "1 x T/RH sensor with radiation shield.",
      ],
    },
  },
  {
    id: 5,
    title: "Irrigation Plus Package",
    image: "TDSPHP02_Irrigation_plus_package.original",
    price: 2160,
    information: {
      linkTo:
        "https://aranet.com/en/pro/products/aranet-irrigation-plus-package",
      productCode: "TDSPHP02",
      text: [
        "The Irrigation Plus Package enables efficient water and nutrient monitoring, helping growers optimize irrigation schedules and reduce water waste by measuring drainage volumes.",
      ],
      includes: [
        "1 x PRO Plus LTE base station",
        "1 x PoE injector for base station power supply",
        "8 x Drainage sensor kit",
      ],
    },
  },
  {
    id: 6,
    title: "Irrigation Expert Package",
    image: "TDSPHP01_Irrigation_expert_package.original",
    price: 7175,
    information: {
      linkTo:
        "https://aranet.com/en/pro/products/aranet-irrigation-expert-package",
      productCode: "TDSPHP01",
      text: [
        "The Irrigation Expert Package is designed for root zone and drainage monitoring, enabling growers to precisely control irrigation levels while optimizing water use and nutrient delivery for sustainable growth.",
      ],
      includes: [
        "1 x PRO Plus LTE base station",
        "1 x PoE injector for base station power supply",
        "8 x Soil sensor WET150",
        "8 x Drainage sensor kit",
      ],
    },
  },
  {
    id: 7,
    title: "Drainage Plus Kit",
    image: "Drainage_Plus_Black_200x200px_JQZhx6H.original",
    price: 3995,
    information: {
      linkTo: "https://aranet.com/en/pro/products/drainage-plus-kit",
      productCode: "TDSPHK01",
      text: [
        "Drainage Plus Kit is designed specifically for drainage monitoring in horticulture. Track drainage water volume, EC and pH for irrigation insights.",
      ],
      includes: ["1 x EC & pH sensor", "1 x Horticulture Drainage sensor"],
    },
  },
  {
    id: 8,
    title: "Drainage Expert Kit",
    image: "Drainage_Expert_Black_1000x1000px_KNePqsO.original",
    price: 5500,
    information: {
      linkTo: "https://aranet.com/en/pro/products/drainage-expert-kit",
      productCode: "TDSPHK02",
      text: [
        "Drainage Expert kit is designed specifically for irrigation process monitoring in horticulture. Track slab weight, drainage water volume, EC and pH for irrigation insights.",
      ],
      includes: [
        "1 x Slab Weight sensor",
        "1 x EC & pH sensor",
        "1 x Horticulture Drainage sensor",
      ],
    },
  },
];

export const products = [
  [
    "Base Station",
    {
      id: 1,
      title: "Aranet PRO base station",
      image: "pro_base-1-1080x1080.original",
      price: 490,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-pro-12-base-station",
        productCode: "TDSBWB01",
        text: [
          "Aranet PRO base station is an environmental monitoring solution that can be applied from a small site to an industrial-scale setting.",
          "It collects data from multiple sensors and provides independent local data storage within its free software and is compatible with Aranet Cloud for a complete experience. Base station users have access to the free Aranet Device Management functionality for centralized local device control and monitoring. The user-friendly interface makes it simple to examine, analyse, and compare data in real-time. Additionally, you can establish alert thresholds and export reports at any time. Software’s responsive design adapts to any device, be it a smartphone, tablet, or laptop.",
          "You can choose between three Aranet PRO versions based on the number of sensors you require. The line-of-sight range reaches up to 3 km/1.9 mi.",
        ],
      },
    },
    {
      id: 2,
      title: "Aranet PRO Plus base station",
      image: "base_pro_plus_1_no_lte-1080x1080.original",
      price: 490,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet-pro-plus-base-station",
        productCode: "TDSBOA03",
        text: [
          "An environmental monitoring solution that acts as a gateway, data storage, and web server.",
          "Base station collects data from multiple sensors and provides independent local data storage within its free software and is compatible with Aranet Cloud for a complete experience.",
          "Base station users have access to the free Aranet Device Management functionality for centralized local device control and monitoring.",
          "Aranet PRO Plus base station has IP67 protection grade and operates both indoors and outdoors.",
        ],
      },
    },
    {
      id: 3,
      title: "Aranet PRO Plus LTE base station",
      image: "base_pro_plus_1_lte-1-1080x1080.original",
      price: 560,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet-PRO-Plus-LTE-base-station",
        productCode: "TDSBOB03",
        text: [
          "An environmental monitoring solution that acts as a gateway, data storage, and web server.",
          "Base station collects data from multiple sensors and provides independent local data storage within its free software, is compatible with Aranet Cloud for a complete experience, and offers third-party integration possibilities.",
          "Base station users have access to the free Aranet Device Management functionality for centralized local device control and monitoring.",
          "Aranet PRO Plus LTE base station has IP67 protection grade and incorporates a 4G LTE modem as well as Wi-Fi and Ethernet network interfaces.",
        ],
      },
    },
  ],
  [
    "Sensors",
    {
      id: 4,
      title: "Aranet4 PRO",
      description: "CO2, temperature, relative humidity, atmospheric pressure",
      image: "Aranet4_PRO_C_900x900.original",
      price: 199,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet4-pro",
        productCode: "TDSPC003",
        text: [
          "Aranet4 PRO is an innovative stand-alone battery-powered wireless sensor for monitoring CO2, relative humidity, temperature and atmospheric pressure in a variety of indoor settings such as home, school or office.",
          "Aranet4 PRO is light, portable, simple to install and effortless to operate. The traffic light indication system tells you when the monitored levels become unhealthy.",
          "The device is compatible with the Aranet PRO base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 5,
      title: "Radon Plus PRO",
      description: "The fastest battery-operated radon sensor",
      image: "Radons_C_PRO.original",
      price: 249,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-radon-plus-pro",
        isProductItem: true,
        productCode: "TDSPSR02",
        text: [
          "Sensor combines best-in-class features for effective radon gas measurement. The unique battery-powered ionization chamber technology provides continuous radon level monitoring.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
        includes: [
          "Achieve full radon measurement accuracy in just 1 hour!",
          "The sensor provides real-time radon levels and 24-hour, 7-day, and 30-day averages.",
          "Battery life up to 7 years.",
          "Additional measurements of temperature, relative humidity, and atmospheric pressure.",
        ],
      },
    },
    {
      id: 6,
      title: "Aranet2 PRO",
      description: "Temperature, relative humidity",
      image: "Aranet2_PRO_C_900x900_GA0zDgw.original",
      price: 95,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet2-pro",
        productCode: "TDSPRH02.002",
        text: [
          "The Aranet2 PRO is an innovative, stand-alone, and battery-powered wireless sensor for monitoring temperature and relative humidity in a variety of indoor settings.",
          "This device is light, portable, simple to install, and effortless to operate.",
          "The Aranet2 PRO is compatible with Aranet base stations and Aranet Cloud.",
        ],
      },
    },
    {
      id: 7,
      title: "T Compact sensor",
      image: "T_Compact_sensor_1_900x900.original",
      price: 70,
      information: {
        linkTo: "https://aranet.com/en/pro/products/t-compact-sensor",
        productCode: "TDSPT204",
        text: [
          "Aranet T Compact sensor provides real-time temperature readings that are critical for businesses like supermarkets and warehouses with cold storage. Temperature monitoring can prevent product decay and losses that could thus occur.",
          "The measurement range is from -40°C to +60°C. The sensor is protected against dust ingress and long periods of immersion in water, IP 68.",
          "Aranet T Compact is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 8,
      title: "T/RH sensor IP42",
      image: "t_rh_ip42-1080x1080.original",
      price: 80,
      information: {
        linkTo: "https://aranet.com/en/pro/products/t-rh-sensor",
        productCode: "TDSPT001",
        text: [
          "Aranet T/RH sensor measures temperature and relative humidity. Thanks to its high durability, it can be placed outdoors or in a very humid indoor environment, IP 42. All Aranet sensors are exceptional with their excellence in energy-saving ensuring the functioning of the battery for up to 10 years.",
          "Aranet T/RH sensor is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 9,
      title: "T/RH IP67 sensor",
      image: "T_RH_IP67_sensor_1_900x900.original",
      price: 105,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-trh-ip67",
        productCode: "TDSPT802",
        text: [
          "Aranet T/RH IP67 Sensor measures temperature and relative humidity.",
          "The IP 67 protection allows this device to operate in harsh environmental conditions, like greenhouses, warehouses, freezers and livestock farms. The sensor is wireless, battery-powered and ensures constant and reliable data monitoring.",
          "T/RH IP67 sensor is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 10,
      title: "T/RH sensor with Radiation Shield",
      image: "T-RH_sensor_with_Radiation_Shield_900x900.original",
      price: 335,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/t_rh_sensor_with_radiation_shield",
        productCode: "TDSPT509",
        text: [
          "Aranet T/RH sensor with Radiation Shield is an innovative solution for accurate temperature and humidity measurements in greenhouses exposed to direct sunlight. Its innovative design creates a passive ventilation flow to prevent sensor heating and ensure precise readings, making it a vital tool for greenhouse ambient condition monitoring.",
          "The low energy consumption ensures long battery life, up to 10 years.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 11,
      title: "PM sensor",
      image: "Radon_Plus_Sensor_Features_2.original",
      price: 240,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet_pm_sensor",
        productCode: "TDSPPM02",
        text: [
          "Measures the concentration of particulate matter in the air, range 0 – 1000 μg/m3 (accuracy ± 10 %). Protection class IP42. Suitable for indoor and outdoor use.",
          "The perfect solution to monitor air pollution and keep you safe from harmful particulate matter in the air. This sensor detects and measures a wide range of air pollutants including dust, smoke, or mold spores, and is suitable for IAQ and other applications.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 12,
      title: "4xT-Probe sensor",
      image: "4xT-Probe_sensor_1_C.original",
      price: 490,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-4x-t-probe-sensor",
        productCode: "TDSPT508",
        text: [
          "Accurately monitor temperature at up to four points with the 4xT-Probe Sensor, featuring four 5-meter-long PT1000 probes for precise measurements. Ideal for both remote monitoring and direct field display, this sensor supports effective temperature management across multiple locations in a single setup.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 13,
      title: "Differential Pressure sensor",
      image: "Differential_Pressure_sensor_1_900x900.original",
      price: 375,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/differential_pressure_sensor",
        productCode: "TDSPDP02",
        text: [
          "Aranet Differential Pressure sensor measures the difference in air pressure between two points.",
          "The scope of application covers different fields such as HVAC, building automation, pharmaceutical industry, including clean rooms and laboratories where negative or positive pressure has to be maintained.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 14,
      title: "CO2 and Temperature sensor",
      image: "CO2_and_Temperature_sensor_1_900x900.original",
      price: 335,
      information: {
        linkTo: "https://aranet.com/en/pro/products/co2_and_temperature_sensor",
        productCode: "TDSPC005",
        text: [
          "Aranet carbon dioxide and temperature sensor is wireless and battery-powered, has IP67 protection class.",
          "The sensor is highly accurate, versatile, and simple to set up.",
          "It is a necessary part of many industrial processes in manufacturing plants, greenhouses, storage tanks and other environments.",
          "Aranet CO2 and Temperature sensor is compatible with Aranet base stations and Aranet Cloud.",
        ],
      },
    },
    {
      id: 15,
      title: "Aranet LUX sensor",
      image: "lux_sensor-1080x1080.original",
      price: 575,
      information: {
        linkTo: "https://aranet.com/en/pro/products/lux_sensor",
        productCode: "TDSKLM01",
        text: [
          "Aranet LUX sensor measures illuminance in different indoor and outdoor environments.",
          "The sensor is often used to measure and monitor levels of light in offices, retail spaces, conference rooms, greenhouses, farms and other locations that require coordinated lighting.",
          "Aranet LUX sensor is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 16,
      title: "PAR sensor",
      image: "lux_sensor-1080x1080.original (1)",
      price: 575,
      information: {
        linkTo: "https://aranet.com/en/pro/products/par_sensor",
        productCode: "TDSKAR02",
        text: [
          "The sensor measures photosynthetically active radiation (PAR) in the 400 to 700 nm range, providing insights into the light your plants receive.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 17,
      title: "IR Plant Temperature sensor",
      image: "IR_Plant_Temperature_sensor.original",
      price: 500,
      information: {
        linkTo: "https://aranet.com/en/pro/products/Aranet_IR_Plant_Sensor",
        productCode: "TDSIR001",
        text: [
          "Aranet Infrared (IR) Plant Temperature sensor is designed to measure the surface temperature of plant leaves.",
          "High measurement accuracy and product durability (IP65 casing) ensure best-in-class performance. Easy-to-use wireless sensor with up to 10 years of battery life.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 18,
      title: "Sap Flow sensor kit",
      image: "SAP_Flow_Sensor_1_900x900.original",
      price: 1390,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-sap-flow-sensor-kit",
        productCode: "TDSKT102",
        text: [
          "The sensor kit consists of a sap flow sensor and a grid-powered 4-20 mA sensor module that wirelessly transmits the measurements to the Aranet base station. The sensor clips onto the stem of the plant and is suitable for stems with a diameter of 4 to 10 mm.",
          "The Sap Flow sensor is designed for monitoring relative variations of sap flow rate in plants petiole or small shoot. Use the sensor for plant monitoring in greenhouses to gain detailed insights into plant activity and responses to ambient condition variations like temperature, relative humidity, and light.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 19,
      title: "Stem Diameter sensor kit",
      image: "Stem_Diameter_sensor_kit_900x900.original",
      price: 1190,
      information: {
        linkTo: "https://aranet.com/en/pro/products/stem_diameter_sensor_kit",
        productCode: "TDSPSD03",
        text: [
          "Aranet Stem Diameter sensor kit is a sensor combination that uses 4-20 mA output and ensures stem variation monitoring providing resolution in microns.",
          "The sensor allows to investigate effects of irrigation rate and other environmental factors on water balance and the growth of plants.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 20,
      title: "Soil Moisture sensor",
      image: "Soil_Moisture_sensor_1_900x900.original",
      price: 145,
      information: {
        linkTo: "https://aranet.com/en/pro/products/soil_moisture_sensor_10_m",
        productCode: "TDSPSM02.100",
        text: [
          "Sensor for soil volumetric water content measurements",
          "Aranet Soil Moisture sensor is a cost-effective wireless sensor designed for a wide range of applications to efficiently monitor irrigation delivery to plants and ensure optimal plant growth.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
          "Various cable lengths available.",
        ],
      },
    },
    {
      id: 21,
      title: "Soil sensor (WET150)",
      image: "Soil_sensor_WET150_1_900x900.original",
      price: 670,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet_soil_sensor_wet150",
        productCode: "TDSPHW02.004",
        text: [
          "The Aranet Soil sensor (WET150) is a battery-powered, wireless soil moisture sensor with built-in temperature and electrical conductivity meters for monitoring irrigation and nutrient delivery to plants.",
          "Measuring the volumetric water content of soil (or substrate) allows farmers and growers to optimize watering parameters. The Aranet Soil sensor (WET150) is a reliable, cost-effective way to determine when fertilizer levels are streamlined for efficient plant growth.",
          "Compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 22,
      title: "Soil sensor (Teros-12)",
      image: "Soil_sensor_Teros-12_1_900x900.original",
      price: 795,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet-soil-sensor-teros-12",
        productCode: "TDSPHE02",
        text: [
          "Monitor irrigation and nutrient delivery to plants to optimize for plant growth,",
        ],
      },
    },
    {
      id: 23,
      title: "EC & pH sensor",
      image: "EC__Ph_sensor_-_1.original",
      price: 2995,
      information: {
        linkTo: "https://aranet.com/en/pro/products/ec-and-ph-sensor",
        productCode: "TDSECP01",
        text: [
          "High-precision sensors in a pre-assembled enclosure box, designed to measure EC and pH in irrigation water for horticulture.",
          "The sensor features a display for onsite readings. Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 24,
      title: "EC sensor",
      image: "EC__Ph_sensor_-_Config_2-1.original",
      price: 1795,
      information: {
        linkTo: "https://aranet.com/en/pro/products/ec-sensor",
        productCode: "TDSEC001",
        text: [
          "High-precision sensors in a pre-assembled enclosure box, designed to measure EC in irrigation water for horticulture.",
          "The sensor features a display for onsite readings. Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 25,
      title: "pH sensor",
      image: "ph_sensor_1.original",
      price: 1695,
      information: {
        linkTo: "https://aranet.com/en/pro/products/pH-sensor",
        productCode: "TDSEC001",
        text: [
          "High-precision sensors in a pre-assembled enclosure box, designed to measure pH in irrigation water for horticulture.",
          "The sensor features a display for onsite readings. Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 26,
      title: "Drainage sensor",
      image: "aranet-drainage-sensor_0-1080x1080.original",
      price: 225,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-drainage-sensor",
        productCode: "TDSPIK02.010",
        text: [
          "The kit consists of Drainage sensor and Dry Contact Pulse counter.",
          "Monitor the quantity of drain water from the substrate. Optimize irrigation and ensure efficient water management.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 27,
      title: "Horticulture Drainage sensor",
      image: "Horti_Drainage_Sensor_-_1.original",
      price: 1095,
      information: {
        linkTo: "https://aranet.com/en/pro/products/horti-drainage-sensor",
        productCode: "TDSPHP07",
        text: [
          "The Horticulture Drainage Sensor is a horticultural drainage box with a drain volume sensor and dedicated EC and pH probes holders. Designed for accurate drainage monitoring, it is ideal for low-volume irrigation systems.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 28,
      title: "Rain and Precipitation sensor kit",
      image: "aranet-rain-and-precipitation-sensor_1-1080x10.original",
      price: 525,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet-rain-and-precipitation-sensor-kit",
        isProductItem: true,
        productCode: "TDSPIL02.010",
        text: [
          "Monitor the quantity of rain and precipitation water. For applications in agriculture for irrigation and soil moisture management, weather stations, and water treatment plants.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
        includes: [
          "The kit consists of rain gauge and Dry Contact Pulse counter",
          "Accuracy: ± 2%",
          "Protection class for Dry Contact Pulse meter - IP 68",
          "Wireless and battery-powered",
        ],
      },
    },
    {
      id: 29,
      title: "Weight sensor",
      image: "weight_sensor_1-1080x1080.original",
      price: 310,
      information: {
        linkTo: "https://aranet.com/en/pro/products/weight_sensor_100kg",
        productCode: "TDSPSV02.100",
        text: [
          "Quantify plant growth and its increase in biomass by closely monitoring plant weight with our Aranet Weight sensor. Plant growth monitoring enables the optimization of plant environmental conditions. High measurement accuracy and product durability (IP67 casing) ensure best-in-class performance.",
          "Aranet Weight sensor is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 30,
      title: "Weight sensor with frame",
      image: "new-aranet-sensors-web_page_1-1080x1080.original",
      price: 1195,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet_weight_sensor_with_frame",
        productCode: "TDSKSV02.050",
        text: [
          "Precise weighing solution with easy leveling to track plant growth and development. Plants can be weighed in their cultivation trays. Plant growth monitoring enables optimization of plant environmental conditions.",
          "Aranet Weight Sensor with frame is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 31,
      title: "Slab Weight sensor",
      image: "Slab_Weight_Sensor-3.original",
      price: 2495,
      information: {
        linkTo: "https://aranet.com/en/pro/products/slab-weight-sensor",
        productCode: "TDSPSS01",
        text: [
          "The slab weight system consists of two weight sensors and a drain water sensor. The sensor combines weight change and drainage volume measurements for precise water consumption monitoring.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 32,
      title: "Ultrasonic Distance sensor",
      image: "Ultrasonic_Distance_sensor_900x900.original",
      price: 900,
      information: {
        linkTo: "https://aranet.com/en/pro/products/Ultrasonic_Distance_sensor",
        productCode: "TDSPDM02",
        text: ["Aranet Ultrasonic Distance sensor."],
      },
    },
    {
      id: 33,
      title: "Aranet One-Phase Energy meter kit",
      image: "sensors-one-phase-meter-fleet-1080x1080.original",
      price: 165,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet-One-Phase-Energy-meter-kit",
        productCode: "TDSKIC01.010",
        text: [
          "The Aranet One-Phase Energy meter kit measures overall consumed energy.",
          "This kit’s main application is monitoring electricity meters. Measurements are converted by SensorHub software to display watt-hours energy consumption.",
          "The Aranet One-Phase Energy Meter kit is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 34,
      title: "Aranet Three-Phase Energy meter kit",
      image: "sensors-three-phase-meter-fleet-1080x1080.original",
      price: 265,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet-Three-Phase-Energy-meter-kit",
        productCode: "TDSKIC03.010",
        text: [
          "The Aranet Three-Phase Energy meter kit measures overall consumed energy.",
          "This kit’s main application is monitoring electricity meters. Measurements are converted by SensorHub software to display watt-hours energy consumption.",
          "The Aranet Three-Phase Energy Meter kit is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 35,
      title: "AC Hour meter",
      image: "AC_Houer_Meter_1_900x900.original",
      price: 300,
      information: {
        linkTo: "https://aranet.com/en/pro/products/ac_hour_meter",
        productCode: "TDSPAC02",
        text: [
          "Aranet AC Hour meter is a simple and reliable solution that monitors the precise run time of devices, machines or any other equipment that is connected to the power grid. Among different applications some of them include - monitoring motor run time, freezer run time in food industry and machinery run time in manufacturing.",
          "The meter itself is wireless, has IP67 protection and a battery life of more than 10 years.",
          "Aranet AC Hour meter is compatible with Aranet base stations and Aranet Cloud.",
        ],
      },
    },
    {
      id: 36,
      title: "PT100 sensor",
      image: "PT100_sensor_1_900x900.original",
      price: 160,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet_pt100_sensor",
        productCode: "TDSPT306.010",
        text: [
          "Aranet PT100 sensor is a Class A platinum resistance thermometer that monitors air, liquid, and solid surface temperature. It’s an easy-to-use class A platinum resistance thermometer suited for use in variety of industries.",
          "IP68 protection class ensures durability, sensors temperature range is from -50°C up to 180°C (-58°F up to 356°F). The cable length is 1 m.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 361,
      title: "PT100 Temperature sensor (Extended Range)",
      image: "TDSPT306_PT100_sensor_extendedoriginal_2.original",
      price: 185,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/PT100_temperature_sensor_extended_range",
        productCode: "TDSPT306.01E",
        text: [
          "Aranet PT100 sensor is a Class A platinum resistance thermometer with a wider temperature measurement interval than a regular PT100 sensor.",
          " Use this sensor to monitor air, liquid, and solid surface temperature. It’s an easy-to-use class A platinum resistance thermometer suited for use in various industries.",
          "IP68 protection class ensures durability, sensors temperature range is from -190 up to 260 °C (-310 up to 500 °F). The cable length is 1 m (3.3 ft).",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 37,
      title: "T-Probe sensor",
      image: "T-probe_sensor_1_900x900.original",
      price: 150,
      information: {
        linkTo: "https://aranet.com/en/pro/products/t-probe-sensor-10-m",
        productCode: "TDSPT002.100",
        text: [
          "Aranet T-probe sensor measures and monitors solid surface, soil, liquid and air temperature and is suitable for use both indoors and outdoors. Aranet T-probe is extremely durable and designed to endure the harshest environments, IP 68 protection class and temperature range -55 °C to 105 °C (-67 °F to 221°F).",
          "The probe is easy to install, and its line-of-sight range reaches up to 3km/1.9mi. Various probe lengths are available up to 10 meters.",
          "The probe is compatible with Aranet Cloud.",
          "Various cable lengths available.",
        ],
      },
    },
    {
      id: 38,
      title: "T/RH Probe",
      image: "T-RH_probe_1_900x900.original",
      price: 180,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-t-rh-probe",
        productCode: "TDSPT309",
        text: [
          "Aranet T/RH probe monitors temperature and relative humidity.",
          "It is a wireless, battery-powered device designed for use inside the buildings, equipment, or machinery. The device has a versatile application designed for HVAC environmental controls and temperature monitoring systems. Aranet T/RH probe can be used in agriculture, manufacturing, pharma industry and can endure harsh environments (IP67).",
          "Sensing element of the Aranet T/RH probe can be exchanged.",
          "The probe is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 39,
      title: "T/RH Probe (ammonia resistant)",
      image: "T-RH_probe_ammonia_resistant_1_900x900.original",
      price: 240,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/t_rh_probe_ammonia_resistant",
        productCode: "TDSPT409",
        text: [
          "Aranet T/RH probe provides highly accurate temperature and relative humidity measurements and is ammonia resistant. IP67 class ensures that the probe is perfectly suitable for harsh environments. The sensor is commonly used in poultry farms.",
          "Compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 40,
      title: "Aranet4 PRO without display",
      description: "Temperature, relative humidity",
      image: "Aranet4_PRO_900x900.original",
      price: 189,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet4_pro_without_display",
        productCode: "TDSPC205",
        text: [
          "Aranet4 PRO without display is an innovative stand-alone battery-powered wireless monitor for measuring CO2, relative humidity, temperature, and atmospheric pressure in a variety of public indoor spaces such as warehouses, schools, or hospitals.",
          "Aranet4 PRO without display is light, portable, simple to install, and effortless to operate.",
          "The monitored data can be viewed by using the Aranet PRO/PRO Plus/PRO Plus LTE base station. For an upgraded user experience, it can also be paired with Aranet Cloud.",
        ],
      },
    },
    {
      id: 41,
      title: "NH3 sensor kit",
      image: "NH3_sensor_kit_900x900.original",
      price: 1440,
      information: {
        linkTo: "https://aranet.com/en/pro/products/nh3_sensor_kit",
        productCode: "TDSPDL03",
        text: [
          "The sensor measures ammonia concentration in air.",
          "The kit consists of NH3 sensor and Aranet 0-10 V Transmitter with 24 VDC.",
          "This sensor kit is for monitoring ammonia gas leaks. It triggers an alarm to safeguard humans and animals in livestock, poultry farms, and sewage treatment plants.",
          "The sensor element must be replaced after 3 years of operation at the latest. Replace by date can be found on the sensor element type plate.",
          "Like all Aranet Pro series sensors, this sensor is compatible with Aranet base station and Aranet Cloud.",
        ],
      },
    },
    {
      id: 42,
      title: "Radio Site Survey Ping-Pong kit",
      image: "Radio_Site_Survey_Ping-Pong_Kit_1_900x900.original",
      price: 175,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/radio_site_survey_ping_pong_kit",
        productCode: "TDSKPP02",
        text: [
          "Test signal strength between two locations to choose the right location for your sensors. The LED light on the sensor will immediately indicate the strength of the Aranet radio signal.",
        ],
      },
    },
  ],
  [
    "Transmitters",
    {
      id: 43,
      title: "Dry Contact Pulse Counter",
      image: "0-10_VDC_transmitter_1_900x900.original",
      price: 102,
      information: {
        linkTo: "https://aranet.com/en/pro/products/pulse_counter_sensor",
        productCode: "TDSPIC02.010",
        text: [
          "Aranet Dry Contact Pulse Counter sensor counts the number of times that a mechanical contact is closed.",
          "The system registers both count-per-measurement interval and the cumulative count. The device is wireless with a battery life of up to 7 years.",
          "Main applications include monitoring utilities, such as electricity, gas and water meters whose measurements software can convert and display in your preferred units (litres, joules, watt-hours and other).",
          "Aranet Dry Contact Pulse Counter sensor is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 44,
      title: "Dry Contact Hour Meter",
      image: "0-10_VDC_transmitter_1_900x900.original",
      price: 102,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet_dry_contact_hour_meter",
        productCode: "TDSPHM01.010",
        text: [
          "The transmitter is designed to suit different industries and needs where it is important to establish for how long a contact has been closed during 1, 2, 5 or 10 minute time intervals.",
          "Aranet Dry Contact Pulse Counter sensor is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 45,
      title: "4-20 mA transmitter",
      image: "0-10_VDC_transmitter_1_900x900.original",
      price: 150,
      information: {
        linkTo: "https://aranet.com/en/pro/products/4_20_ma_transmitter",
        productCode: "TDSPCL02.010",
        text: [
          "Aranet 4-20 mA transmitter is a battery-powered and energy-efficient solution designed to integrate with any 3rd party sensor that uses mA as an output.",
          "The device measures 4-20 mA current and has IP68 casing ensuring durability and reliability in harsh environments. Among many other applications, 4-20 mA transmitter can be used to monitor pH, liquid level, pressure, magnetic flow, velocity, acceleration, industrial vibration.",
          "The device is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 46,
      title: "4-20 mA transmitter with 12 VDC PSU",
      image: "Transmitter_Voltage_sensor_1_900x900.original",
      price: 250,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet_4_20_ma_transmitter_with_12_vdc_power_supply",
        productCode: "TDSCT102",
        text: [
          "The Aranet 4-20 mA transmitter is an 85-265VAC powered, energy-efficient solution designed to integrate with any third-party sensor that has 4-20mA output.",
          "The device measures 4-20 mA currents and provides 12 VDC power. It has an IP67 casing, ensuring durability and reliability in harsh environments.",
          "The device is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 47,
      title: "4-20 mA transmitter with 24 VDC PSU",
      image: "Transmitter_Voltage_sensor_1_900x900.original",
      price: 250,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet_4_20_ma_transmitter_with_24_vdc_power_supply",
        productCode: "TDSCT202",
        text: [
          "The Aranet 4-20 mA transmitter is an 85-265VAC powered, energy-efficient solution designed to integrate with any third-party sensor that has 4-20mA output.",
          "The device measures 0-30 mA currents and provides 24 VDC power. It has an IP67 casing, ensuring durability and reliability in harsh environments.",
          "The device is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 48,
      title: "0-10 VDC transmitter",
      image: "0-10_VDC_transmitter_1_900x900.original",
      price: 150,
      information: {
        linkTo: "https://aranet.com/en/pro/products/0_10_vdc_transmitter",
        productCode: "TDSPVM02.010",
        text: [
          "Aranet 0-10 VDC transmitter measures DC voltage and is designed to integrate with any 3rd party sensor that uses V as an output.",
          "Among many other applications, a 4-20 mA analog device can be used to monitor pH, liquid level, pressure, magnetic flow, velocity, acceleration, industrial vibration.",
          "The device has an IP68 casing and can endure harsh environments.",
          "The device is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 49,
      title: "0-10 V transmitter with 12 VDC PSU",
      image: "Transmitter_Voltage_sensor_1_900x900.original",
      price: 250,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet_0_10_v_transmitter_with_12_vdc_power_supply",
        productCode: "TDSVT102",
        text: [
          "The Aranet 0-10 VDC transmitter measures analog signals and provides power for third-party sensors. A 12VDC built-in power supply fuels third-party sensors for radio transmission. This energy-efficient solution is designed to integrate with any third-party sensor that uses -32...+32VDC signal as an output.",
          "The device has an IP67 casing to endure harsh environments.",
          "The device is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 50,
      title: "0-10 V transmitter with 24 VDC PSU",
      image: "Transmitter_Voltage_sensor_1_900x900.original",
      price: 250,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet_0_10_v_transmitter_with_24_vdc_power_supply",
        productCode: "TDSVT202",
        text: [
          "The Aranet 0-10 VDC transmitter measures analog signals and provides power for third-party sensors. A 24VDC built-in power supply fuels third-party sensors for radio transmission. This energy-efficient solution is designed to integrate with any third-party sensor that uses -35...+35VDC signal as an output.",
          "The device has an IP67 casing to endure harsh environments.",
          "The device is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 51,
      title: "PT1000 transmitter",
      image: "Aranet_PT1000_transmitter_1_900x900.original",
      price: 150,
      information: {
        linkTo: "https://aranet.com/en/pro/products/pt1000_transmitter",
        productCode: "TDSPT506.010",
        text: [
          "Aranet PT100 transmitter is resistance-to-digital converter for platinum resistance temperature detector. It monitors air, liquid and solid surface temperature.",
          "PT1000 has IP68 protection class and is designed to endure the harshest environments.",
          "The applications include use for industrial equipment. The transmitter is battery-powered and wireless with up to a 3 km (1.9 mi) range. It can be connected with existing equipment and sensors with 2 and 4 wire connections.",
          "Aranet PT1000 transmitter is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 52,
      title: "PT100 transmitter",
      image: "Aranet_PT1000_transmitter_1_900x900.original",
      price: 150,
      information: {
        linkTo: "https://aranet.com/en/pro/products/pt100_transmitter",
        productCode: "TDSPTA06.010",
        text: [
          "Aranet PT100 transmitter is a resistance-to-digital converter for platinum resistance temperature detection. It monitors air, liquid and solid surface temperature. PT100 has IP68 protection class and is designed to endure the harshest environments.",
          "The applications include use for industrial equipment. The transmitter is battery-powered and wireless with up to a 3 km (1.9 mi) range.",
          "It can be connected to existing equipment and sensors with 2 and 4 wire connections. Additionally, it can be connected to a custom class A platinum resistance thermometers with temperature range -200 °C up to 600 °C (-328 °F up to 1112 °F).",
          "Aranet PT100 transmitter is compatible with Aranet Cloud.",
        ],
      },
    },
  ],
  [
    "Accessories",
    {
      id: 53,
      title: "Navy Blue Travel Case",
      image: "Aranet_Bag_No_Screen_1.original",
      price: 22,
      information: {
        linkTo: "https://aranet.com/en/pro/products/navy-blue-travel-case",
        isProductItem: true,
        productCode: "TDASBT01",
        text: [
          "Take your Aranet sensor anywhere with the new Aranet travel case!",
          "It fits the Aranet sensors perfectly and protects the devices from scratches and humidity. Clip it to the outside of your backpack, your belt loop, or your key chain for carrying convenience and a pop of color.",
        ],
        includes: [
          "Fully lined interior",
          "Custom Topo Carabiner",
          "#10 YKK zippers on two sides",
          "Compatible with Aranet4, Aranet2, and Aranet Radiation.",
          "Materials: 1000D recycled nylon, 210D recycled nylon pack cloth liner",
          "Dimensions: 8.9 cm “w x 8.9 cm” h x 2.5 cm “ d",
        ],
      },
    },
    {
      id: 54,
      title: "WET150 transmitter extension cable",
      image: "Extention_WET150.original",
      price: 55,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet-wet150-transmitter-extension-cable",
        productCode: "TDACHM02.050",
        text: [
          "Accessory to extend the cable length between the Aranet radio transmitter and the WET150 soil sensor. Ideal for positioning the transmitter higher above thick vegetation or other environmental obstacles to ensure optimal radio transmission to the Aranet PRO base station.",
        ],
      },
    },
    {
      id: 55,
      title: "WET150 sensor stand",
      image: "WET150_Installation_Accessory_1.original",
      price: 8.4,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet-wet150-sensor-stand",
        productCode: "TTDKWSH01.004",
        text: [
          "The WET150 Sensor Stand provides stable, accurate placement of your Aranet WET150 Soil Sensor specifically within grow bags. Engineered to optimize sensor positioning, this stand helps minimize data variations for more consistent measurements. Developed with insights from growers, this accessory makes achieving precision in every setup easier.",
          "The stand is also included with the Aranet WET150 Soil Sensor.",
        ],
      },
    },
    {
      id: 56,
      title: "T/RH replacement probe",
      image: "T_RH_replacement_probe_1.1.original",
      price: 40,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet-t-rh-replacement-probe",
        productCode: "TDSPT309.001",
        text: [
          "Aranet T/RH replacement probe is the exchanged sensing element of the Aranet T/RH probe which monitors temperature and relative humidity.",
          "The probe is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 57,
      title: "T/RH replacement probe (ammonia resistant)",
      image: "T_RH_ammonia_resistant_replacement_probe_1.1.original",
      price: 110,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/t_rh_replacement_probe_ammonia_resistant",
        productCode: "TDSPT409.001",
        text: [
          "Aranet T/RH replacement probe (ammonia resistant) is the exchanged sensing element of the Aranet T/RH probe (ammonia resistant) which monitors temperature and relative humidity.",
          "The probe is compatible with Aranet Cloud.",
        ],
      },
    },
    {
      id: 58,
      title: "T/RH probe extension cord",
      image: "T-RH_probe_extension_cord_1_900x900-2.original",
      price: 65,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet-TRH-probe-extension-cord-10-m",
        productCode: "TDACT009.100",
        text: [
          "Aranet T/RH probe extension cord available in:",
          "10 m",
          "1 m",
          "2 m",
          "5 m",
        ],
      },
    },
    {
      id: 59,
      title: "Aranet4 PRO / HOME Wall Mount Bracket",
      image: "wall-mount_1-1080x1080.original",
      price: 17,
      information: {
        linkTo: "https://aranet.com/en/pro/products/wall_mount_bracket",
        productCode: "TDAPWM01",
        text: [""],
      },
    },
    {
      id: 60,
      title: "DOL 53 Ammonia sensor replacement",
      image: "dol.53-sensor_web_4-1080x1080.original",
      price: 980,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet-DOL-53-Ammonia-sensor-replacement",
        productCode: "TDAPDL03",
        text: [
          "Made for Drager DOL 53 ammonia sensor to monitor ammonia gas levels in livestock and poultry farms and sewage treatment plants.",
          "The sensor element must be replaced after 3 years of operation at the latest.",
          "Replace by date can be found on the sensor element type plate.",
        ],
      },
    },
    {
      id: 61,
      title: "Aranet4 AC Power Adapter",
      image: "Aranet4_AC_Power_Adapter_EU_900x900.original",
      price: 25,
      information: {
        linkTo: "https://aranet.com/en/pro/products/aranet4-ac-power-adapter",
        productCode: "TDAACA02",
        text: [""],
      },
    },
    {
      id: 62,
      title: "Aranet PRO Plus/PRO Plus LTE Base Station Mounting Foot Kit",
      image: "Aranet_PRO_Plus_PRO_Plus_LTE_Base_Station_Moun.original",
      price: 8,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet_PRO_Plus_PRO_Plus_LTE_Base_Station_Mounting_Foot_Kit",
        productCode: "TDAPMF01",
        text: [
          "This four-piece wall mount secures an Aranet base station in its installation location.",
        ],
      },
    },
    {
      id: 63,
      title: "Aranet PRO Plus/PRO Plus LTE Base Station Pole Mounting Kit 1",
      image: "viens_1-1080x1080.original",
      price: 45,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet_PRO_Plus_PRO_Plus_LTE_Base_Station_Pole_Mounting_Kit_1",
        productCode: "TDAPMK01",
        text: [
          "This stainless-steel pole mount secures Aranet base stations in their installation location on poles up to 17.7 cm (6.96 in) in diameter.",
        ],
      },
    },
    {
      id: 64,
      title:
        "Aranet PRO Plus/PRO Plus LTE Base Station Pole Mount Pole Mounting Kit 2",
      image: "divi_1-1080x1080.original",
      price: 50,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet_PRO_Plus_PRO_Plus_LTE_Base_Station_Pole_Mount_Pole_Mounting_Kit_2",
        productCode: "TDAPMK02",
        text: [
          "This custom-built pole mount secures Aranet base stations in their installation location on poles up to 38 cm (14.96 in) in diameter.",
        ],
      },
    },
    {
      id: 65,
      title: "WET150 sensor installation bracket",
      image: "WET_150_stand_1.original",
      price: 30,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/aranet-wet150-sensor-installation-bracket",
        productCode: "TDAWSH01",
        text: [
          "Ensure seamless and reliable data collection across your expanding botanical endeavors with the WET150 Sensor Installation Bracket.",
          "This thoughtfully designed bracket guarantees consistently accurate sensor installation for each plant, fostering a uniform and reliable data-gathering process.",
        ],
      },
    },
    {
      id: 66,
      title: "IEEE 802.3af PoE injector for Aranet PRO Plus base station",
      image: "poe-injector_aranet_web_1-1080x1080.original",
      price: 40,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/IEEE-802_3af-PoE-injector-for-Aranet-PRO-Plus-base-station",
        productCode: "TDAPOE03",
        text: [
          "Active PoE 802.3af injector for powering Aranet PRO Plus/PRO Plus LTE or other PoE 802.3af compliant device.",
          "This active injector ensures a stable power supply over Ethernet cable for the base station. Note that it is not compatible with Aranet PRO base station.",
          "!!! Please ignore '0' stock level for this Active PoE product. Product is available from stock and will be completed with cable based on destination country.",
          "!!! More information regarding the Aranet PRO Plus/PRO Plus LTE base station powering is available in Aranet Forum.",
        ],
      },
    },
    {
      id: 67,
      title: "Modbus TCP/IP to Modbus RTU converter",
      image: "modbus-rtu-converter_1-1-1080x1080.original",
      price: 120,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/modbus-tcp-ip-to-modbus-rtu-converter",
        productCode: "TDAPMC01",
        text: [
          "The Modbus converter is required when the customer wants to connect the Aranet base station to their system, which supports the 'Modbus RTU' protocol.",
        ],
      },
    },
    {
      id: 68,
      title: "PoE Injector for Aranet PRO base station",
      image: "poe-injector-for-aranet-pro-base-station-1080x.original",
      price: 5.5,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/poe_injector_for_aranet_pro_base_station",
        productCode: "TDAPOE01",
        text: [
          "Passive PoE injector that is used to power the devices over Ethernet cable.",
          "Aranet PRO Base can be powered with AC/DC power adapter which is included in the original packaging box or using this accessory. It ensures a stable 12V DC power supply over Ethernet cable for the base station.",
          "More information regarding the Aranet PRO base station power connection with the PoE injector is available in Aranet Forum.",
        ],
      },
    },
    {
      id: 69,
      title: "PoE Injector Waterproof Case",
      image: "f6a3583-1080x1080.original",
      price: 7,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/PoE-injector-waterproof-case",
        productCode: "TDAPC001",
        text: [
          "Recommended for use when the PoE Injector TDAPOE03 is deployed in a damp environment.",
        ],
      },
    },
    {
      id: 70,
      title: "Differential Pressure sensor installation kit",
      image: "Different_Kit_for_Web_page_3.original",
      price: 20,
      information: {
        linkTo:
          "https://aranet.com/en/pro/products/Aranet-differential-pressure-sensori-installation-kit",
        isProductItem: true,
        productCode: "TDAPDP01",
        text: ["The installation kit includes:", ""],
        includes: [
          "Magnetic holders for the sensor",
          "Connectors with screws",
          "Tubes",
        ],
      },
    },
  ],
];

export const serviceTypes = [
  {
    type: "Heating Systems",
    image: heating,
    text: [
      "Uneven temperatures? High fuel costs? We design and implement:",
      "Tailored solutions that maximize heat efficiency while reducing energy bills.",
    ],
    properties: [
      "Hot water and air heating systems",
      "Infrared and radiant heaters",
      "Condensing boilers and heat recovery systems",
    ],
  },
  {
    type: "Cooling & Ventilation",
    image: cooling,
    text: [
      "Struggling with overheating or poor airflow? We offer:",
      "Climate stability = stronger plants and fewer diseases.",
    ],
    properties: [
      "Evaporative cooling and fog systems",
      "Forced ventilation and intelligent fan control",
      "Shade systems integrated with light sensors",
    ],
  },
  {
    type: "Automation & Climate Computers",
    image: climatecontrol,
    text: [
      "Take control of your greenhouse with smart technology:",
      "Affordable, powerful, and scalable.",
    ],
    properties: [
      "Season5 Climate Computer – Built in-house for precision growing",
      "Automated temperature, humidity, and CO₂ regulation",
      "Integration with irrigation, fertigation, and screen control",
      "Remote access + alerts (SMS, Telegram)",
    ],
  },
  {
    type: "Data-Driven Growing",
    image: datadriven,
    text: [
      "We believe that better decisions come from better data:",
      "No more guesswork. Just smart growing.",
    ],
    properties: [
      "Wireless climate monitoring with Aranet sensors",
      "Long-term data storage for analysis and troubleshooting",
      "Custom dashboards and AI insights",
    ],
  },
  {
    type: "Retrofitting & Upgrades",
    image: retrofitting,
    text: [
      "Modernize your existing greenhouse — without starting from scratch:",
      "Every greenhouse deserves a second life.",
    ],
    properties: [
      "Upgrades to heating and boiler systems",
      "Sensor-based monitoring retrofits",
      "Modular climate control additions",
    ],
  },
];

export const projectsImage = [
  {
    image: "image1.webp",
    title: "0.6 ha Roses",
    text: "Voskevaz | Heating & cooling, Season5 climate computer, data-driven growing",
  },
  {
    image: "image2.webp",
    title: "0.45 ha Roses",
    text: "Voskevaz | Season5 climate computer installed",
  },
  {
    image: "image3.webp",
    title: "0.1 ha Rose Nursery",
    text: "Voskevaz | Heating & cooling system with condensing boilers, Season5 climate computer",
  },
  {
    image: "image4.webp",
    title: "1.5 ha Roses",
    text: "Voskevaz | Heating & cooling, Season5 climate computer",
  },
  {
    image: "image5.webp",
    title: "0.13 ha Rose Nursery",
    text: "Voskevaz | Heating & cooling system, Season5 climate computer – IN PROGRESS!",
  },
  {
    image: "image6.webp",
    title: "0.25 ha Potted Flowers",
    text: "Akunk | Heating & cooling system design",
  },
  {
    image: "image7.webp",
    title: "3.2 ha Roses",
    text: "Akunk | Heating system modernization, boiler room upgrade",
  },
  {
    image: "image8.webp",
    title: "1 ha Spray Roses",
    text: "Hartavan | Heating, cooling and control system design",
  },
  {
    image: "image9.webp",
    title: "2.0 ha Spray Roses",
    text: "Hartavan | Heating system modernisation",
  },
  {
    image: "image10.webp",
    title: "3.1 ha Spray Roses",
    text: "Hartavan | Boiler room upgrade",
  },
  {
    image: "image11.webp",
    title: "0.3 ha Tomatoes",
    text: "Arzni | Heating & cooling system, data-driven growing with Aranet sensors",
  },
  {
    image: "image12.jpg",
    title: "1.0 ha Gerbera",
    text: "Marmarashen | Heating & cooling system design",
  },
  {
    image: "image13.jpg",
    title: "0.7 ha Sweet Pepper",
    text: "Parpi | Heating & cooling system design",
  },
];

export const seasonFiveProducts = [
  {
    id: 999 - 3,
    title: "Season5 Basic Climate Controller",
    image: contolImg1,
    pdf: "/pdfs/Basic.pdf",
    information: {
      text: [
        "The Season5 Basic Climate Controller automates the core climate functions of a single-zone greenhouse, helping growers maintain stable temperature and humidity throughout the day with minimal manual intervention. It offers intelligent, weather-adaptive control of ventilation, heating, and cooling systems based on real-time sensor data.",
      ],
      includes: [
        "1 x Control unit with local display",
        "1 x Indoor temperature and humidity sensor",
        "1 x Outdoor temperature and humidity sensor",
        "1 x Wind speed sensor",
        "2 x Ventilation output channels",
        "2 x Heating output channels",
        "2 x Cooling output channels",
      ],
      additionaltext: [
        "Remote access is available via VNC, allowing full control and screen view of the controller from any computer or mobile device — just like operating it on-site.",
        "Optional: SMS and Telegram alert integration (no subscription required)",
      ],
    },
  },
  {
    id: 999 - 1,
    title: "Season5 Advanced Climate Controller",
    image: contolImg2,
    pdf: "/pdfs/Advanced.pdf",
    information: {
      text: [
        "Designed for greenhouses with advanced infrastructure, this controller ensures high-precision climate management across all key systems — heating, cooling, ventilation, shading, and humidification. Works in tandem with the Season5 Boiler Controller for optimized water-based heating.",
      ],
      includes: [
        "1 x Advanced control unit",
        "2 x Heating circuit outputs (with mixing valve control)",
        "1 x Three-stage cooling control (PAD & FAN)",
        "1 x Fogging humidification output",
        "1 x Horizontal shading screen output",
        "1 x Circulation fan output",
        "1 x Weather station (T/RH, wind speed & direction, solar radiation sensors)",
        "VNC remote access interface (PC, tablet, smartphone)",
      ],
      requires: ["Season5 Boiler Controller for heating power regulation"],
    },
  },
  {
    id: 999 - 2,
    title: "Season5 Boiler Room Controller",
    image: contolImg3,
    pdf: "/pdfs/BoilerRoom.pdf",
    information: {
      text: [
        "Centralized controller for managing greenhouse boiler systems and distributing heat to up to three climate zones based on real-time requests from Season5 Advanced Climate Controllers.",
      ],
      includes: [
        "1 x High-performance Segnetics PLC with touchscreen",
        "2 x Boiler outputs with burner lockout and flame monitoring",
        "1 x Boiler anti-condensation pump control",
        "1 x Variable-speed transport pump control",
        "1 x Mixing valve control for water temperature regulation",
        "1 x Water pressure sensor with control of pressurization and safety logic",
        "1 x Weather station data interface",
        "VNC remote access interface",
      ],
      requires: [
        "Integration with Season5 Advanced Climate Controllers for zone-specific temperature requests",
      ],
    },
  },
];
