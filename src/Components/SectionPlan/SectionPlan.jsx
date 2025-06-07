import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

import { motion } from "framer-motion";

import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  Divider,
} from "@mui/material";

import "./sectionPlan.css";

export default function SectionPlan() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const isMobile = useMediaQuery("(max-width:992px)");

  const plans = [
    {
      title: "Essential Plan",
      description: "Eget odio vitae ac at vestibulum",
      price: {
        monthly: 16,
        yearly: 19,
      },
      features: [
        "Instagram Integration",
        "Messaging Automation",
        "Appointment Scheduling",
        "Monthly Reporting & Insights",
        "Multi-Channel Support",
        "Operate with Halper through these channels or use the app with extended functionality for free"
      ],
    },
    {
      title: "Pro Plan",
      description: "Eget odio vitae ac at vestibulum",
      price: {
        monthly: 24,
        yearly: 29,
      },
      features: [
        "Instagram Integration",
        "Messaging Automation",
        "Appointment Scheduling",
        "Monthly Reporting & Insights",
        "Multi-Channel Support",
        "Operate with Halper through these channels or use the app with extended functionality for free"
      ],
    },
  ];

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Box
        sx={{
          py: 8,
          px: 2,
          textAlign: "center",
          color: "white",
        }}
        className="payment-plan"
      >
        <Typography
          variant="h3"
          fontWeight={700}
          gutterBottom
          className="payment-plan__title"
        >
          Find the perfect plan
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mb: 4, fontFamily: "'Inter', sans-serif" }}
          className="payment-plan__description"
        >
          <b>Start for free. Test it. Use it. Love it. </b>
          <br />
          Switch to yearly and skip 2 months of payments.
        </Typography>

        {isMobile ? (
          <Box className="toggle-parent">
            <ToggleButtonGroup
              value={selectedPlanIndex}
              exclusive
              onChange={(e, value) => value !== null && setSelectedPlanIndex(value)}
              className="payment-plan__toggle"
              sx={{
                "& .MuiToggleButton-root": {
                  borderRadius: "30px",
                  textTransform: "none",
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(84, 99, 246, 1)",
                  backgroundColor: "transparent",
                  transition: "background-color 0.3s, color 0.3s",
                  px: 3,
                  py: 1,
                  "&.Mui-selected": {
                    backgroundColor: "rgba(84, 99, 246, 1)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(84, 99, 246, 0.85)",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "rgba(84, 99, 246, 0.15)",
                  },
                },
              }}
            >
              <ToggleButton value={0} className="mobile-btn-payment-plan">Monthly</ToggleButton>
              <ToggleButton value={1} className="mobile-btn-payment-plan">Yearly (2 months free)</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
              className="payment-plan__toggle_bottom"
            >
              <ToggleButton value={0} className="payment-plan__toggle_bot">Essential Plan</ToggleButton>
              <ToggleButton value={1}>Pro Plan</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        ) : (
          <ToggleButtonGroup
            value={billingCycle}
            exclusive
            onChange={(e, value) => value && setBillingCycle(value)}
            className="payment-plan__toggle"
            sx={{
              "& .MuiToggleButton-root": {
                borderRadius: "30px",
                textTransform: "none",
                fontFamily: "'Inter', sans-serif",
                color: "rgba(2, 6, 55, 1)",
                backgroundColor: "transparent",
                transition: "background-color 0.3s, color 0.3s",
                px: 3,
                py: 1,
                "&.Mui-selected": {
                  backgroundColor: "rgba(84, 99, 246, 1)",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(84, 99, 246, 0.85)",
                  },
                },
                "&:hover": {
                  backgroundColor: "rgba(84, 99, 246, 0.15)",
                },
              },
            }}
          >
            <ToggleButton value="monthly">Monthly</ToggleButton>
            <ToggleButton value="yearly">Yearly (2 months free)</ToggleButton>
          </ToggleButtonGroup>
        )}

        <Box className="plan-cards-container" sx={{ justifyContent: "center" }}>
          {isMobile ? (
            <Card
              key={selectedPlanIndex}
              className="plan-card"
              sx={{
                color: "rgba(2, 6, 55, 1)",
                width: "100%",
                maxWidth: 420,
                minHeight: 650,
                borderRadius: "30px",
                boxShadow: 3,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  className="plan-card__included-title"
                >
                  {plans[selectedPlanIndex].title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={2}
                  sx={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {plans[selectedPlanIndex].description}
                </Typography>

                <Box display="flex" alignItems="baseline" mb={2} className="prices-box">
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    className="price-value"
                    component="span"
                  >
                    ${plans[selectedPlanIndex].price.monthly.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="body1"
                    ml={1}
                    className="price-period"
                    component="span"
                  >
                    / month
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  className="plan-btn"
                  fullWidth
                  sx={{
                    mb: 3,
                    borderRadius: "12px",
                    height: "48px",
                    backgroundColor: "#5463F6",
                    ":hover": { backgroundColor: "#3b49d4" },
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Select this package
                </Button>

                <Divider sx={{ mb: 2 }} />

                <Typography
                  variant="subtitle1"
                  gutterBottom
                  className="plan-card__features-title"
                >
                  What's included?
                </Typography>

                <List dense className="plan-card__features">
                  {plans[selectedPlanIndex].features.map((feature, i) => (
                    <ListItem
                      key={i}
                      sx={{ gap: 1, px: 0 }}
                      disablePadding
                      alignItems="center"
                    >
                      <CheckCircleIcon
                        color="primary"
                        sx={{ color: "#5463F6" }}
                        fontSize="small"
                      />
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}
                      >
                        {feature}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          ) : (
            plans.map((plan, index) => (
              <Card
                key={index}
                className="plan-card"
                sx={{
                  color: "rgba(2, 6, 55, 1)",
                  width: 480,
                  minHeight: 650,
                  borderRadius: "30px",
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    className="plan-card__included-title"
                  >
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mb={2}
                    sx={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {plan.description}
                  </Typography>

                  <Box display="flex" alignItems="baseline" mb={2}>
                    <Typography
                      variant="h3"
                      fontWeight={800}
                      className="price-value"
                      component="span"
                    >
                      ${plan.price[billingCycle].toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body1"
                      ml={1}
                      className="price-period"
                      component="span"
                    >
                      / {billingCycle === "monthly" ? "month" : "year"}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    className="plan-btn"
                    fullWidth
                    sx={{
                      mb: 3,
                      borderRadius: "20px",
                      height: "72px",
                      backgroundColor: "#5463F6",
                      ":hover": { backgroundColor: "#3b49d4" },
                      fontWeight: 700,
                      fontSize: 18,
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Select this package
                  </Button>

                  <Divider sx={{ mb: 2 }} />

                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className="plan-card__features-title"
                  >
                    What's included?
                  </Typography>

                  <List dense className="plan-card__features">
                    {plan.features.map((feature, i) => (
                      <ListItem
                        key={i}
                        sx={{ gap: 1, px: 0 }}
                        disablePadding
                        alignItems="center"
                      >
                        <CheckCircleIcon
                          color="primary"
                          sx={{ color: "#5463F6" }}
                          fontSize="small"
                        />
                        <Typography
                          variant="body2"
                          sx={{ fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}
                        >
                          {feature}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
        <Box className="plan-card__icons-bar">
          <Box className="icon"><CalendarMonthIcon />Get 14 day free trial</Box>
          <Box className="icon"><CreditCardIcon />No any hidden fees pay</Box>
          <Box className="icon"><AlarmOnIcon />You can cancel anytime</Box>
        </Box>
      </Box>
    </motion.div>
  );
}
