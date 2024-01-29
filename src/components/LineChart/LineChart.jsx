import {ResponsiveLine} from "@nivo/line";//for creating line chart
import energyData from "../../data/energyData.json"
import './LineChart.scss'; 
import colors from "../../styles/partials/variables.scss"
const LineChart = () => {
  return (
    <div className="lineChart" style={{ height: 300 }}>
      <ResponsiveLine
        data={energyData}
        //define the theme of chart
        theme={{axis: {
          domain: {
            line: {
              stroke: colors.White,
              strokeWidth: 1 
            }
          },
          ticks: {
            line: {
              stroke: '#FFFFFF', 
              strokeWidth: 1 
            },
            text: {
              fill: '#FFFFFF' 
            }
          },
          legend: {
            text: {
              fill: '#FFFFFF' 
            }
          }
        }
      }}
        colors={colors.Green}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisTop={null}
        axisRight={null}
        //design x axis
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Month',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        //desin y axis
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Energy Consumption KW/h',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor="none"
        pointBorderWidth={2}
        pointBorderColor="white"
        pointLabelYOffset={-12}
        //Enable grid to capture and trigger mouse events.
        useMesh={true}
        //remove the grids of chart
        enableGridX={false}
        enableGridY={false}
        //smooth transition
        curve="natural"
      />
      <p className="lineChart__title">Monthly eletricity consumption</p>
    </div>
  );
  }


export default LineChart;