import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "gray", color: "white", p: 3 }}>
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a
            href="https://www.linkedin.com/in/narayan-bhattarai-07a5a2178/"
            alt="linkedin link"
            target="_blank"
            className="hover:text-white"
          >
            {" "}
            <LinkedInIcon />
          </a>

          <TwitterIcon />
          <a
            href="https://github.com/BhattaraiNarayan"
            alt="github link"
            target="_blank"
            className="hover:text-white"
          >
            <GitHubIcon />
          </a>

          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; ✨ナラヤン&nbsp;レストラ✨
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
