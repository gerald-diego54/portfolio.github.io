import React from 'react';
import './css/Header.css';
import gerald from './img/gerald.png';
import './css/Main.css';
import './css/About.css'
import figma from './img/figma-icon.svg'
import adobeXd from './img/adobe-xd.svg'
import SASS from './img/SASS.svg'
import type from './img/typing.svg'
import './css/Certificate.css';
import logo_fatima from './pdf/fatima-logo-removebg-preview.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Magazine from './img/Magazine.png';
import Calculator from './img/calculator.png';
import Clinic from './img/Clinical-Form.png';
import './css/Project.css';
import Group from './img/Group-Proj.png';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { blue, green, pink, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'animate.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import './css/Media.css';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Header = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  function animateNumber(callback, from, to, duration) {
    let start = null,
      animate = timestamp => {
        start = start || timestamp;
        let progress = Math.min((timestamp - start) / duration, 1);
        callback(progress * (to - from) + from);
        if (progress < 1) {
          window.requestAnimationFrame(animate);
        }
      };
    window.requestAnimationFrame(animate);
  }

  animateNumber(value => {
    document.querySelector('#value').textContent = Math.floor(value) + "+";
  }, 0, 203, 10000);
  animateNumber(value => {
    document.querySelector('#value1').textContent = Math.floor(value) + "+";
  }, 0, 103, 10000);
  animateNumber(value => {
    document.querySelector('#value2').textContent = Math.floor(value) + "+";
  }, 0, 3, 10000);
  animateNumber(value => {
    document.querySelector('#value3').textContent = Math.floor(value) + "+";
  }, 0, 103, 10000);


  return (
    <>



      <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-light fs-2 mx-5" href="#">Gerald</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light fs-6" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light fs-6" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light fs-6" href="#certificates">
                  Certificates
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light fs-6" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light fs-6" href="#services">Services</a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-light" type="submit">Hire Me</button>
            </form>
          </div>
        </div>
      </nav>




      <div id="home" class="container bg">
        <div>
          <img class="img-pos" src={gerald} />
          {/* <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" /> */}
        </div>
        <div className="display-pos">
          <h3 className="hello animate__animated animate__backInDown">Hello</h3>
          <h1 className="heading animate__animated animate__backInUp">I'm Gerald Diego</h1><br />
          <p className="intro">
            <span class="txt-rotate" data-period="2000" data-rotate='["< I am a Front-End Developer />", "< I am a Database Designer />", "< I am a Back-End Developer />", "< I am a IT Support Specialist />" ]'></span>
          </p><br /><br />
          <button class="btn btn-outline-light btn-lg btn-style">Hire Me</button>
        </div>
        <div class="container contain">
          <div class="row">
            <div class="col text-center"><p id="value" class="text-success fs-3 fw-bold">230</p><p class="text-uppercase">Projects Completed</p></div>
            <div class="col text-center"><p id="value1" class="text-success fs-3 fw-bold">230+</p><p class="text-uppercase">Satisfied Clients</p></div>
            <div class="col text-center"><p id="value2" class="text-success fs-3 fw-bold">230+</p><p class="text-uppercase">Years Experienced</p></div>
            <div class="col text-center"><p id="value3" class="text-success fs-3 fw-bold">230+</p><p class="text-uppercase">Design Awards</p></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" class="container-fluid">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1 class="text-dark text-center">About to Developer</h1><br /><br /><br /><br />
        <img class="about" src={type} />
        <p class="lead text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel repellendus quasi cum. Voluptate nemo, eligendi voluptates, maxime labore corporis nihil modi ex dignissimos numquam nisi dolorum dolor beatae dolorem dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto expedita fuga dolores tempora dolorum voluptates esse assumenda, quod sed inventore mollitia voluptas ipsum fugit saepe sit delectus obcaecati repudiandae quam.<br /><br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde accusantium, vitae velit autem necessitatibus exercitationem sunt libero perferendis fugit repellendus voluptatem quaerat deleniti reprehenderit cumque ut neque quidem quod! Ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, odit omnis, sint obcaecati voluptates harum sed ab dolor laboriosam provident earum consequatur qui optio eius. Tenetur odit eum iure voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quam adipisci, recusandae expedita consequuntur iusto nam impedit quae voluptatem totam suscipit eius, dolor quis non. Ratione, eius? Non, provident inventore.</p>
      </div>
      <div class="container-fluid tools">
        <h2 class="text-center text-white py-4">My Tools Advantage</h2>
        <div class="col">
          <img class="adobe" src={adobeXd} />
        </div>
        <div class="col">
          <img class="sass" src={SASS} />
        </div>
        <div class="col">
          <img class="figma" src={figma} />
        </div>
      </div>
      {/* Certificates */}
      <div id="certificates" class="bg-dark height">
        <h1 class="text-white texts">Certificates of Completion</h1>
        <p class="text-white fs-5 py-2">
          A certificate of completion can mean different things depending upon the program in which a person participates.<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe modi maxime adipisci veniam quidem quae quia culpa magni cum, enim voluptas veritatis vero. Nulla, amet! Possimus nemo necessitatibus animi quos.<br /><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime, possimus rerum eveniet eius nisi est qui doloribus ipsum quod architecto natus, quas modi facilis repellat nam error officia beatae.<br /><br />
          A certificate of completion can mean different things depending upon the program in which a person participates.
        </p>
        <img class="fatima-logo" src={logo_fatima} />
        <img class="kodego-logo" src="https://kodego.ph/_nuxt/img/kodego-large.7481d93.svg" />
        <img class="cisco-logo" src="https://th.bing.com/th/id/R.7c8e3d91c6708fce205ff14d693f3f73?rik=gFF2RqCWd29iSw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f11%2fCisco-logo.png&ehk=amjKwJX%2b3s9CVWoTkm%2fC8%2fqvlMChVLlDUH6S36sp9yE%3d&risl=&pid=ImgRaw&r=0" />
        <img class="udemy-logo" src="https://download.logo.wine/logo/Udemy/Udemy-Logo.wine.png" />
        <img class="micro" src="https://logos-download.com/wp-content/uploads/2019/06/Trend_Micro_Logo.png" />
        <img class="dict" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/DICT-Logo-Final-2-300x153.png/320px-DICT-Logo-Final-2-300x153.png" />
        <img class="freecodecamp" src="https://opensource.freecodecamp.org/design-style-guide/downloads/fcc_secondary_large.png" />
      </div>

      {/* Projects Section */}
      <div class="container-fluid">
        <div class="proj-sect">
          <h1 id="projects" class="text-center proj-size">Projects</h1>
          <Stack container display="flex" flexWrap="wrap" marginTop="80px" justifyContent="center" align-items="center" direction="row" spacing={10} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={Magazine}
              />
              <CardContent>
                <Typography className="header-name" variant="p" component="div">
                  <div class="h4">Magazine: Praise and Worship Music</div>
                </Typography><br />
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Application</Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={Calculator}
              />
              <CardContent>
                <Typography className="header-name" variant="p" component="div">
                  <h4>Calculator</h4><br /><br />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Application</Button>
              </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={Clinic}
              />
              <CardContent>
                <Typography className="header-name" variant="p" component="div">
                  <h4>Clinical Form</h4><br /><br />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Application</Button>
              </CardActions>
            </Card>
          </Stack>

          <Stack container display="flex" flexWrap="wrap" marginTop="80px" justifyContent="center" align-items="center" direction="row" spacing={10} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={Group}
              />
              <CardContent>
                <Typography className="header-name" variant="p" component="div">
                  <div class="h4">Outsourcing Website: 4WebServices</div>
                </Typography><br />
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Application</Button>
              </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
              // image=""
              />
              <CardContent>
                <Typography className="header-name" variant="p" component="div">
                  <h4>Future Projects</h4><br /><br />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Application</Button>
              </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
              // image={}
              />
              <CardContent>
                <Typography className="header-name" variant="p" component="div">
                  <h4>Future Projects</h4><br /><br />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id dolore doloremque, culpa, voluptatem, atque voluptate fugit suscipit ullam vel dolorem quo molestiae aperiam ratione quae. Eveniet, libero. Id, fugiat?
                </Typography>
              </CardContent>
              <CardActions>
                <Button href="https://github.com/gerald-diego54" className="btn-action" size="small">Application</Button>
              </CardActions>
            </Card>
          </Stack><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>

      {/* Services Section */}
      <div id="services" class="container-fluid bg-dark px-5"><br /><br /><br />
        <h1 class="text-center text-white">Customer's Feedback</h1><br /><br /><br />
        <div class="row mx-5">
          <div class="col mx-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Rose Marie"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.generated.photos/iXuwBd3CMkuQx13483_-RBa4fFWXIZWjr4ZSXpGSZK4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODAwMjg5LmpwZw.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero pariatur quidem veritatis non id nostrum tempore cupiditate eos aliquid natus, architecto sunt dignissimos illum voluptas placeat assumenda maxime ipsum!
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    J
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Jeremy Castillo"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.generated.photos/_RpfQVkNqqVLMykVPOdInKqlUbEyqoosS1AT4on2Amw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDk4OTg0LmpwZw.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia at vitae rerum inventore, fugit, voluptatibus tempore cumque aspernatur obcaecati perspiciatis fuga? Modi ipsam assumenda saepe sint atque illum commodi dicta.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    G
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Gerome Garcia"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.generated.photos/b86MYwgh5v1VtwLFSCv9w8wGR2FM8pKGYXmqfS8dNCM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTgxNzI0LmpwZw.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint illum quo delectus tempore ea! Iste earum, distinctio, non asperiores eligendi consectetur perferendis quae exercitationem quam eos ipsam eaque, reiciendis delectus?
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </div>
        </div>
        <br /><br /><br /><br />
        <div class="row mx-5">
          <div class="col mx-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    L
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Leonard Mendez"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.generated.photos/WPn98YKKsy7jMu1p7HRKTDnFaY7DqbjdCxIbfhX9mf4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjE4MzU5LmpwZw.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, consequatur odit laboriosam quaerat quos dolorem corrupti sed? Odio sapiente maiores numquam corporis, illo possimus eos quod illum autem eum fugiat!
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                    D
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Deanna Bowman"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.generated.photos/1Bjx7e_SEe6R5WR0ye7qGplzEIl-rQhnsN_hGOL1qxE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzgwMDI3LmpwZw.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus eveniet, asperiores voluptatem, hic repudiandae distinctio commodi animi fuga nobis laborum. Expedita repudiandae sunt corrupti a deserunt, adipisci dignissimos sapiente?
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card>
          </div>
          <div class="col">
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
                    B
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Brandie Schroeder"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://images.generated.photos/PZTmTxTdQIF7Zp6lajGbwfv-uaSkyhjcK2qdISkr6Eo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI3MTMwLmpwZw.jpg"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate sit quae ab, ducimus dolor cum et dicta odio dolore corrupti debitis soluta sed quos, saepe dolorem, porro corporis praesentium dolores?
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
            </Card><br /><br /><br /><br />
          </div>
        </div>
      </div>
      <br /><br /><br /><br />

      {/* Footer Sections */}
      <div id="footer" class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-2">
              <h5>Navigations</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#home" class="nav-link p-0 text-muted">Home</a></li>
                <li class="nav-item mb-2"><a href="#about" class="nav-link p-0 text-muted">About</a></li>
                <li class="nav-item mb-2"><a href="#certificates" class="nav-link p-0 text-muted">Certificates</a></li>
                <li class="nav-item mb-2"><a href="#projects" class="nav-link p-0 text-muted">Projects</a></li>
                <li class="nav-item mb-2"><a href="#services" class="nav-link p-0 text-muted">Services</a></li>
              </ul>
            </div>

            <div class="col-2">
              <h5>Social Meadia</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
              </ul>
            </div>

            <div class="col-2">
              <h5>Projects Portfolio</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">GitHub</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">LinkedIn</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Codepen</a></li>
              </ul>
            </div>

            <div class="col-4 offset-1">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
                  <button class="btn btn-dark" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2021 Gerald Diego</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#twitter" /></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
              <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use href="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Header
