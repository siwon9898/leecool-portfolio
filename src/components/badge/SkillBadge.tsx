import { Box, styled } from "@mui/material";

const SkillBadge = (props: { text: string; isDev?: boolean }) => {
  return <BadgeBox isdev={props.isDev}>{props.text}</BadgeBox>;
};

const BadgeBox = styled(Box)((props: { isdev?: boolean }) => {
  return {
    background: props.isdev ? "#FAF7ED" : "#F2F1EF",
    padding: "9px 50px",
    borderRadius: "100px",
    fontWeight: 500,
    fontSize: "20px",
    color: "#333",
    whiteSpace: "nowrap",
    display: "inline-block",
    marginRight: "10px",
    marginBottom: "10px",
    "@media (max-width : 1080px)": {
      fontSize: "16px",
    },
    "@media (max-width : 440px)": {
      padding: "9px 20px",
      fontSize: "12px",
    },
  };
});

export default SkillBadge;
