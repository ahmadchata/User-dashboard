import styled from "styled-components";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { IoPaperPlane } from "react-icons/io5";

export interface Wallet {
  walletAccountBalance: string;
  account_number: string;
}

interface DashboardMainProps {
  wallet: Wallet;
}

const DashboardMain = ({ wallet }: DashboardMainProps) => {
  const data = [
    { name: "Product A", value: 500 },
    { name: "Product B", value: 800 },
    { name: "Product C", value: 600 },
    { name: "Product D", value: 500 },
  ];
  const COLORS = ["#100329", "#39cdcc", "#C4C4C4", "#FCB500"];

  const data2 = [
    { name: "Active", value: 500 },
    { name: "Not Active", value: 800 },
  ];
  const COLORS2 = ["#0099FF36", "#39cdcc"];

  const data3 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const NonActiveProduct = () => {
    return (
      <div className="insurance-product">
        <h2>Non Active Product</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={65}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={-20}
              dataKey="value"
              cornerRadius={10}
              stroke="false"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const ActiveProduct = () => {
    return (
      <div className="active-product">
        <h2>Active Product</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data2}
              innerRadius={65}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={-20}
              dataKey="value"
              cornerRadius={10}
              stroke="false"
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS2[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const ProductActivities = () => {
    return (
      <div className="product-activities">
        <h2>Product Activities</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            className="bar-chart"
            data={data3}
            innerRadius={50}
            outerRadius={30}
            barSize={15}
            style={{ fontSize: 12 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              name="Product A"
              fill="#39cdcc"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="uv"
              name="Product B"
              fill="#FCB500"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  interface CreditCardWalletProps {
    walletNumber: string;
  }

  const CreditCardWallet = ({ walletNumber }: CreditCardWalletProps) => {
    return (
      <div className="credit-card-wallet">
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          Wallet Number
        </p>
        <p>{walletNumber}</p>
      </div>
    );
  };

  const ProductBreakdown = () => {
    return (
      <Table>
        <h2>Product Breakdown</h2>

        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Subscriptions</th>
              <th>Transactions</th>
              <th>Active Users</th>
              <th>Non Active Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-name">
                <div className="m">P</div>
                Product 1
              </td>
              <td>147</td>
              <td>20</td>
              <td>87</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="product-name">
                <div className="mp">P</div>
                Product 2
              </td>
              <td>81</td>
              <td>17</td>
              <td>10</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="product-name">
                <div className="c">P</div>Product 3
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </Table>
    );
  };

  return (
    <DashboardWrap>
      <DashboardChart>
        <NonActiveProduct />
        <ActiveProduct />
        <ProductActivities />
      </DashboardChart>

      <DashboardData>
        <div className="credit-card">
          <CreditCardWallet walletNumber={wallet?.account_number} />

          <div className="credit-card-box">
            <div className="credit-card-box-icon">
              <IoPaperPlane />
            </div>

            <button className="credit-card-box-btn">Top up wallet</button>
          </div>
        </div>

        <div className="product-breakdown">
          <ProductBreakdown />
        </div>
      </DashboardData>
    </DashboardWrap>
  );
};

const DashboardWrap = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`;

const DashboardChart = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-bottom: 20px;
  > div {
    flex: 1;
    width: 200px;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
    background-color: #ededed;
    border-radius: 10px;
    padding: 50px 10px 10px 10px;
    &:last-child {
      margin-right: 0;
    }
    h2 {
      font-size: 16px;
    }
  }
  .insurance-product {
    flex: 1.5;
  }
  .active-product {
    flex: 1;
  }
  .product-activities {
    flex: 3;
  }
  .bar-chart {
    width: 100%;
  }
`;

const DashboardData = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-bottom: 20px;
  > div {
    flex: 1;
    width: 200px;
    /* height: 200px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
    background-color: #ededed;
    border-radius: 10px;
    padding: 20px 20px;
    &:last-child {
      margin-right: 0;
    }
  }
  .credit-card {
    flex: 1.5;
    background-color: transparent;
    /* justify-content: flex-start; */
    padding: 0;
    .credit-card-wallet {
      background-image: url("/assets/card.svg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      width: 100%;
      height: 180px;
      overflow: hidden;
      position: relative;
      border-radius: 20px;
      padding: 20px;
      color: #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .credit-card-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: #ededed;
      border-radius: 10px;
      margin-top: 20px;
      .credit-card-box-icon {
        color: #39cdcc;
        font-size: 20px;
        background-color: #5bf6f6b8;
        padding: 5px 20px;
        border-radius: 10px;
        cursor: pointer;
      }

      .credit-card-box-btn {
        background-color: #39cdcc;
        color: #fff;
        border-radius: 10px;
        padding: 10px 20px;
        border: none;
        font-size: 12px;
      }
    }
  }
  .product-breakdown {
    flex: 4;
  }
`;

const Table = styled.div`
  width: 100%;
  /* border: 1px solid blue; */
  table {
    /* width: 100%; */
    margin-top: 20px;
    border-collapse: collapse;
    /* background-color: #ffffff; */
    text-align: left;
    overflow: hidden;
    font-size: 14px;
    /* box-shadow: 0 5px 10px #e1e5ee; */
    position: relative;
    flex-direction: column;
    overflow-x: auto;
    /* border: 1px solid red; */
    display: block;
    box-sizing: border-box;
  }
  h2 {
    font-size: 16px;
  }
  thead {
    width: 100%;
    /* background-color: #030749; */
    /* color: #fff; */
  }

  th {
    width: 100%;
    padding: 1rem 1rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
    font-weight: 900;
    white-space: nowrap;
  }

  td {
    padding: 0.5rem 1rem;
    white-space: nowrap;
    text-transform: capitalize;
    border-bottom: 1px solid #dfdfdf;
  }

  td:not(.product-name) {
    text-align: center;
  }

  .product-name {
    display: flex;
    align-items: center;
    div {
      width: 30px;
      height: 30px;
      background-color: red;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
      &.m {
        background-color: #fe50502b;
        color: #fe5050;
      }

      &.mp {
        background-color: #0099ff14;
        color: #0066ff;
      }

      &.c {
        background-color: #0b8f7421;
        color: #279ea2;
      }
    }
  }
`;

export default DashboardMain;
