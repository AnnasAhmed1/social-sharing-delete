import React from "react";
import { Helmet } from "react-helmet";
export default function HelmetMetaData(props) {
  let quote = props.quote !== undefined ? props.quote : "";
  let title =
    props.title !== undefined
      ? props.title
      : "CampersTribe - World is yours to explore";
  let image =
    "https://media.istockphoto.com/id/1455965102/photo/beautiful-sunrise-bursting-through-the-eucalyptus-trees-as-it-rises-over-a-mountain-beside-a.jpg?s=1024x1024&w=is&k=20&c=wYGK__qz9i8M7NfBvkNtkfbWNoiBxDLGi64PQjOo_wY=";
  let description =
    props.description !== undefined
      ? props.description
      : "CampersTribe lets you experience the camping culture. We discover the hidden gems in the nearby to help you connect with nature & yourself by learning in the woods, on the riverbank under the open sky." +
        "Trust us, its million dollars experience to ride away from city life, pitch a tent, do campfire and endless talk!" +
        "So, join us on this voyage, and explore the beauty and miracle of being yourself!";
  let hashtag = props.hashtag !== undefined ? props.hashtag : "#camperstribe";
  return (
    <Helmet>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"og_title"} />
      <meta property="og:quote" content={"og:quote"} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={"og:description"} />
    </Helmet>
  );
}
