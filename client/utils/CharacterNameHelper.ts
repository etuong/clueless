import { Suspect } from "../components/console/Suspect";

export const prettifyName = name => {
    return Suspect[name];
}

export const prettify2Name = name => {
    let prettifiedName = "";
    switch (name) {
      case "miss_scarlet":
        prettifiedName = "Miss Scarlet";
        break;
      case "professor_plum":
        prettifiedName = "Prof Plum";
        break;
      case "colonel_mustard":
        prettifiedName = "Col Mustard";
        break;
      case "mrs_peacock":
        prettifiedName = "Mrs. Peacock";
        break;
      case "mr_green":
        prettifiedName = "Mr. Green";
        break;
      case "mrs_white":
        prettifiedName = "Mrs. White";
        break;
      default:
        break;
    }
    return prettifiedName;
  };