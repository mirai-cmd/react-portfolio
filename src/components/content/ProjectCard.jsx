import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ProjectCard({ item }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        maxHeight: 600,
        marginTop: "4rem",
        marginLeft: "3rem",
        marginRight: "2rem",
        borderRadius: "1.4rem",
        background: "black",
        /*boxShadow: "0.2rem 0.5rem 0.4rem 0.05rem black",*/
      }}
    >
      <CardActionArea sx={{ background: "#03fc7b" }}>
        <CardMedia
          component="img"
          loading="lazy"
          image={item.img}
          alt={item.title}
          sx={{ height: "12rem", padding: "1.5rem", borderRadius: "2.4rem" }}
        />
        <CardContent sx={{ backgroundColor: "black" }}>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {item.title}
          </Typography>
          <Typography variant="body2" color="white">
            {item.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "black", paddingBottom: "2rem" }}>
        <a

          variant="contained"
          href={item.code}
          style={{
            backgroundColor: "#03fc7b",
            color: "black",
            margin: "auto",
            borderRadius: "0.75rem",
            textAlign: "center",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            width: "6rem",
            cursor: "pointer",
          }}
        className="hover:scale-105 duration-500 hover:text-white"
        >
          GitHub
        </a>
      </CardActions>
    </Card>
  );
}
