import {
  Container
} from "@mui/material";

import "./sectionBadge.css"
import bgImage from "../../images/badge.png";
export default function SectionBadge() {
  return (
    <div className="badge-container">
      <img src={bgImage} />
    </div>
  )
}