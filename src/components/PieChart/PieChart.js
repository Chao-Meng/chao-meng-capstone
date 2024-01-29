import { ResponsivePie } from '@nivo/pie';
import electricData from "../../data/electricData.json"
import './PieChart.scss'; 
import colors from "../../styles/partials/variables.scss"

const PieChart = () => {
    const theme = {
        labels: {
          text: {
            fontFamily: 'Arial, sans-serif',
            fill: colors.White
          }
        }
      };
      
  return (
    <div className="pieChart" style={{ height: 300 }}>
      <ResponsivePie
        data={electricData}
        theme={theme}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'accent' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      />
      <p className='pieChart__title'>Percentage of total energy consumption</p>
    </div>
  )
}
  export default PieChart