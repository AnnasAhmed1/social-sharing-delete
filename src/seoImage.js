import * as React from "react";
const FeaturedImage = (props) => (
  <>
    {props.customImage ? (
      <meta property="og:image" content={props.customImage} />
    ) : (
      <meta
        name="og:image"
        content={
          "https://media.istockphoto.com/id/1455965102/photo/beautiful-sunrise-bursting-through-the-eucalyptus-trees-as-it-rises-over-a-mountain-beside-a.jpg?s=1024x1024&w=is&k=20&c=wYGK__qz9i8M7NfBvkNtkfbWNoiBxDLGi64PQjOo_wY="
        }
      />
    )}
  </>
);
export default FeaturedImage;
