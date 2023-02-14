import React from "react";
import {
  Card,
  Paper,
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
        borderRadius: "0.8rem",
        backdropFilter:"blur(10rem)",
        background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
        boxShadow: "0.2rem 0.3rem 0.8rem 0.05rem black",
      }}
      >
      <CardActionArea
        sx={{
          background: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
        }}
        >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.title}
          sx={{ height: "12rem", padding: "1.5rem", borderRadius: "2.4rem" }}
          />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" color="white">
            {item.title}
          </Typography>
          <Typography variant="body2" color="white">
            {item.desc}
          </Typography>
          <CardActions
            sx={{
              paddingBottom: "2rem",
            }}
            >
            <a
              href={item.code}
              style={{
                borderRadius: "0.45rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                width: "6rem",
                cursor: "pointer",
              }}
              className="hover:scale-105 duration-500 text-white bg-black text-center m-auto"
            >
              GitHub
            </a>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
