import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import DrawerAppBar from "../components/AppBar";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    tech: "Next.js, TypeScript, Material UI",
    github: "https://github.com/sitnaingsoe/portfolio",
    demo: "#",
  },
  {
    title: "Employee Management System",
    description: "A CRUD-based web application for managing employee data.",
    tech: "Java MVC",         
    github: "https://github.com/sitnaingsoe/staff-management",
    demo: "#",
  },
{
  title: "Foodi POS",
  description:
    "A point-of-sale system designed for small restaurants to manage orders, payments, and daily sales. Includes product management, order tracking, and sales reporting.",
  tech: "Next.js, TypeScript, Material UI, PostgreSQL",
  github: "https://github.com/sitnaingsoe/foodie-pos",
  demo: "#",
},
{
  title: "Dating App",
  description:
    "A web-based dating platform where users can create profiles, browse matches, and communicate securely. Focused on user authentication, profile management, and responsive UI.",
  tech: "Php, MySQL, Material UI",
  github: "https://github.com/sitnaingsoe/dating-web-project",
  demo: "#",
},
{
  title: "Salary Management System",
  description:
    "A management system for handling employee salaries, allowances, and deductions. Provides payroll calculation, employee records, and monthly salary reports.",
  tech: "C#, MySQL, Material UI",
  github: "https://github.com/sitnaingsoe/employee-payment",
  demo: "#",
},
{
  title: "E-Book Platform",
  description:
    "An online e-book reading platform that allows users to browse, read, and manage digital books. Includes user authentication, book categories, and reading progress tracking.",
  tech: "Laravel, MySQL, Bootstrap",
  github: "https://github.com/sitnaingsoe/read-port",
  demo: "#",
},

];

export default function ProjectsPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc, #eef2ff)",
        py: 8,
        px: 2,
      }}>
      <DrawerAppBar />
      <Box sx={{maxWidth: 1100, mx: "auto"}}>
        {/* Header */}
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Projects
        </Typography>

        <Typography sx={{color: "#555", mb: 4}}>Some of the projects I have worked on.</Typography>

        {/* Project Grid */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>

                  <Typography sx={{color: "#555", mb: 2}}>{project.description}</Typography>

                  <Typography variant="body2" color="text.secondary">
                    <strong>Tech:</strong> {project.tech}
                  </Typography>
                </CardContent>

                <CardActions sx={{mt: "auto"}}>
                  <Button size="small" href={project.github} target="_blank">
                    GitHub
                  </Button>
                  <Button size="small" href={project.demo} target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
