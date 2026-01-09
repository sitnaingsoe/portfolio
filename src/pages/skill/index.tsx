import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import DrawerAppBar from "../components/AppBar";

export default function SkillsPage() {
  return (
    <Box sx={{maxWidth: 900, mx: "auto", mt: 8, px: 2}}>
      {/* Header */}
      <DrawerAppBar />
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Skills
      </Typography>

      <Typography sx={{color: "#555", mb: 4}}>
        Technologies I use to design and build web applications.
      </Typography>

      <Divider sx={{mb: 4}} />

      {/* Frontend */}
      <Box sx={{mb: 4}}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Frontend
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["React", "TypeScript", "JavaScript", "HTML", "CSS", "Material UI"].map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Stack>
      </Box>

      <Box sx={{mb: 4}}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Backend
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["Node", "Express", "Next", "Java", "Python", "laravel"].map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Stack>
      </Box>
      {/* Tools */}
      <Box sx={{mb: 4}}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Tools
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["Git", "GitHub", "VS Code", "npm", "Responsive Design"].map((tool) => (
            <Chip key={tool} label={tool} variant="outlined" />
          ))}
        </Stack>
      </Box>

      {/* Learning */}
      <Box>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Currently Learning
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["Machine learning", "Computer Vision", "Performance Optimization", "Deep Learning"].map(
            (learn) => (
              <Chip key={learn} label={learn} color="primary" variant="outlined" />
            ),
          )}
        </Stack>
      </Box>
    </Box>
  );
}
