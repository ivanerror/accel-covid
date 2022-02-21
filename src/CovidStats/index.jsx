import styled from "@emotion/styled";
import Color from "../Color";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import moment from "moment";
import { motion } from "framer-motion";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBox = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const CountryTitle = styled(motion.div)`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.White};
  letter-spacing: 0.1rem;
`;

const UpdateDate = styled(motion.div)`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${Color.White};
`;

const CardChild = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Color.Black};
  border-radius: 0.7rem;
  padding: 1.5rem 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  grid-row-start: ${(props) => props.gridRowStart};
  grid-row-end: ${(props) => props.gridRowEnd};
  ${(props) => props.deaths && "background-color: #AF4F4F"};
  ${(props) => props.recovered && "background-color: #488947"};
`;

const Label = styled.div`
  font-size: 0.6rem;
  letter-spacing: 0.1rem;
  color: ${Color.LightGrey};
  text-align: center;
`;

const Total = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${Color.White};
  letter-spacing: 0.1rem;
`;

const CountryCard = (props) => {
  const dayDifference = moment(props.lastUpdate).diff(
    moment(props.differenceDate),
    "days"
  );

  console.log(props);

  return (
    <Card>
      <CardHeader>
        <CountryTitle
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {props.country.toUpperCase()}
        </CountryTitle>
        <UpdateDate
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Last Update : {moment(props.lastUpdate).format("ll")}
        </UpdateDate>
      </CardHeader>

      <CardBox>
        <CardChild
          gridRowStart={1}
          gridRowEnd={3}
          initial={{ x: -100, y: -20, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
        >
          <Label>TOTAL CONFIRMED</Label>
          <Total>
            <CountUp end={props.total} separator="," duration={3} />
          </Total>
          <Label>
            +<CountUp end={props.todayCases} separator="," duration={3} /> Today
          </Label>
        </CardChild>
        <CardChild
          deaths
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Label>DEATHS</Label>
          <Total>
            <CountUp end={props.deaths} separator="," duration={2.5} />
          </Total>
          <Label>
            +<CountUp end={props.todayDeaths} separator="," duration={3} />{" "}
            Today
          </Label>
        </CardChild>
        <CardChild
          recovered
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Label>RECOVERED</Label>
          <Total>
            <CountUp end={props.recovered} separator="," duration={2.5} />
          </Total>
          <Label>
            +<CountUp end={props.todayRecovered} separator="," duration={3} />{" "}
            Today
          </Label>
        </CardChild>
      </CardBox>
    </Card>
  );
};

CountryCard.propTypes = {
  country: PropTypes.string,
  total: PropTypes.number,
  deaths: PropTypes.number,
  recovered: PropTypes.number,
  lastUpdate: PropTypes.instanceOf(Date),
};

export default CountryCard;
