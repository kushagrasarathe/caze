import React from "react";
import ProfileCard from "../src/components/ProfileCard";
import kushagra from "../src/assets/kushagra.jpg";
import dhruv from "../src/assets/dhruv.jpg";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import {
  Creator_Contract_ABI,
  Creator_Contract_address,
} from "../utils/constants";
import { useContract, useProvider } from "wagmi";
// import { useContract, useProvider } from "wagmi";
// import { getRecord } from "../src/components/ceramic";
import { useState, useEffect } from "react";

export default function Explore() {
  const [noId, SetNoId] = useState(0);
  const [creator, SetCreator] = useState([]);
  const provider = useProvider();

  const Creator_contract = useContract({
    addressOrName: Creator_Contract_address,
    contractInterface: Creator_Contract_ABI,
    signerOrProvider: provider,
  });

  /// fetch the data from the CID from IFPS for both type of datas
  const fetchIPFS = async (_cid) => {
    console.log("fetching the files");
    // const _cid = "bafkreifxtpdf5lcmkqjqmpe4wjgfl4rbov23ryn5merejridxk27pfzufq";
    const data = await GetData(_cid);
    console.log(data);
    return data;
    /// get the json and use that json for further processing of the data
    /// {name , description(bio) , image (pfp), }
  };

  /// for every ID
  const fetchCreator = async (id) => {
    try {
      const data = await Creator_contract.fetchURI(id);
      console.log("Data Uri fetched");
      const response = await fetchIPFS(data.value);
      return response;
      /// render this response in the card below to show the data
      return <ProfileCard image={data.pfp} name={data.Name} intro={data.bio} />;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCreators = async () => {
    try {
      const data = [];
      const noId = await fetchNoId();
      console.log("Fetching...");
      //// we need to run a loop from 0 --- > id , that will fectch the data for every creator, fetchCreators is called in useEffect
      // you just need to render all the data in seperate cards
      // return(
      // )

      /// render this respone , store in the array
      for (let id = 0; id <= noId; id++) {
        const _creator = await fetchCreator(id);
        data.push(_creator);
      }
      SetCreator(data);
      /// render this data array to show all the data on the screen
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNoId = async () => {
    try {
      console.log("fetching the Ids");
      const id = await contract.id();
      console.log(id);
      /// parse the ID character from the id value and pass it to the user
      SetNoId(id);
      return id;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  return (
    <>
      <div className={styles.explore}>
        <h1 className={styles.section_heading}>Creators</h1>
        <div className={styles.explore_cards}>
          <ProfileCard
            image={kushagra}
            name={"Kushagra Sarathe"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />
          <ProfileCard
            image={dhruv}
            name={"Dhruv Agarwal"}
            intro={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate corporis placeat earum at ex illo eos sint a optio natus, saepe doloremque sapiente dolorem sunt, voluptas perspiciatis iure repellendus facilis."
            }
          />
        </div>
      </div>
    </>
  );
}
