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
        width:"19.5rem",
        height:"26rem",
        marginTop: "4rem",
        marginLeft: "1rem",
        marginRight: "2rem",
        backgroundColor:"white",
        borderRadius: "0.8rem",
      }}
      >
      <CardActionArea
        >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.title}
          sx={{ height: "10rem",width:"24rem" }}
          />
        <CardContent color="black" >
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2">
            {item.desc}
          </Typography>
          <CardActions
            sx={{
              paddingBottom: "2rem",
            }}
            >
            <a
              href={item.code}
              target="_blank"
              style={{
                color:"white",
                backgroundColor:"#20a4fc",
                borderRadius: "0.45rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                width: "6rem",
                cursor: "pointer",
              }}
              className="hover:scale-105 hover:bg-black duration-500 text-center m-auto"
            >
              GitHub
            </a>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
