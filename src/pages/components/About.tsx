import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 8,
        px: 2,
      }}
    >
      <Typography variant="h4" fontWeight={700} gutterBottom>
        About Me
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography sx={{ mb: 2, lineHeight: 1.7 }}>
        Hi, I’m Sit Naing Soe, a passionate web developer who enjoys building
        modern, responsive, and user-friendly web applications.
      </Typography>

      <Typography sx={{ mb: 2, lineHeight: 1.7 }}>
        I specialize in front-end development using React, TypeScript, and modern
        UI libraries such as Material UI. I enjoy turning ideas and designs into
        clean and functional user interfaces.
      </Typography>

      <Typography sx={{ mb: 2, lineHeight: 1.7 }}>
        My skills include React, JavaScript, HTML, CSS, Material UI, and Git. I
        have worked on personal and academic projects that helped me understand
        real-world development workflows.
      </Typography>

      <Typography sx={{ lineHeight: 1.7 }}>
        My goal is to grow as a professional web developer and contribute to
        meaningful projects while continuously improving my skills.
      </Typography>
    </Box>
  );
}
