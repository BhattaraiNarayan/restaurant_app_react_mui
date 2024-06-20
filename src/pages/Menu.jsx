import { MenuList } from "../data/data";
import Layout from "../components/Layout/Layout";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map(
          (
            menu,
            index // Add index as second parameter
          ) => (
            <Card key={index} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              {" "}
              {/* Assign key={index} */}
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: 1, fontWeight: "bold", fontSize: "1.2rem" }}
                  >
                    値段: ¥{menu.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        )}
      </Box>
    </Layout>
  );
};

export default Menu;
