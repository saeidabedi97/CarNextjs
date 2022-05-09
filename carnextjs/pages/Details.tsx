import {
  BlueContainer,
  DetailsContainer,
  BlueContainerHeader,
  BlueSubtitle,
  BlueListContainer,
  BlueListItem1,
  BlueListItem2,
  BlueListItem3,
  BlueListItem4,
  PurpleContainer,
  PurpleContainerHeader,
  PurpleSubtitle,
  PurpleListContainer,
  PurpleListItem1,
  PurpleListItem2,
  PurpleListItem3,
  PurpleListItem4,
  CarSelectionButton,
  CarSelectionButton2,
  CarSelectionContainer,
} from "../styles/Details.style";
import { useState } from "react";
import { motion } from "framer-motion";
import { color } from "../Utils/Colors";

export default function Details() {
  const [show, setShow] = useState("Container");

  return (
    <DetailsContainer
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", transition: { duration: 6 } }}
    >
      <CarSelectionContainer>
        <CarSelectionButton onClick={() => setShow("BlueContainer")}>
          BMW M8 COMPETITION
        </CarSelectionButton>
        <CarSelectionButton2 onClick={() => setShow("PurpleContainer")}>
          BMW M850i xDRIVE{" "}
        </CarSelectionButton2>
      </CarSelectionContainer>
      <BlueContainer
        className={show === "BlueContainer" ? "sendfront" : "sendback"}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <BlueContainerHeader>BMW M8 Competition</BlueContainerHeader>
        <BlueSubtitle>Maximum dynamism and exclusivity</BlueSubtitle>
        <BlueListContainer>
          <BlueListItem1>
            High-performance M TwinPower Turbo 8-cylinder
          </BlueListItem1>
          <BlueListItem2>M xDrive with active M differential</BlueListItem2>
          <BlueListItem3>Exlusive design elements and equipment</BlueListItem3>
          <BlueListItem4>
            460 kW/625hp, 750 Nm, 0-100km/h in 3.2 seconds
          </BlueListItem4>
        </BlueListContainer>
      </BlueContainer>
      <PurpleContainer
        className={show === "PurpleContainer" ? "sendfront" : "sendback"}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <PurpleContainerHeader>BMW M850I xDRIVE COUPE</PurpleContainerHeader>
        <PurpleSubtitle>
          Powerful features and exlusive environment
        </PurpleSubtitle>
        <PurpleListContainer>
          <PurpleListItem1>
            M TwinPower Turbo 8-cylinder petrol engine
          </PurpleListItem1>
          <PurpleListItem2>
            8-speed Steptronic Sport transmission
          </PurpleListItem2>
          <PurpleListItem3>
            BMW xDrive with M sport differential
          </PurpleListItem3>
          <PurpleListItem4>
            390 kW/530 hp, 750 Nm, 0-100 km/h in 3.9 seconds
          </PurpleListItem4>
        </PurpleListContainer>
      </PurpleContainer>
    </DetailsContainer>
  );
}
