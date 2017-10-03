import React, { Component } from 'react';
import * as firebase from 'firebase'
import { PieChart, Pie, Legend, Tooltip, Cell, Label } from 'recharts';

const COLORS = [
  '#0088FE', // Blue
  '#00C49F', // Green
  '#FFBB28', // Yellow
  '#FF8042', // Orange
  '#8884d8', // Purple
  '#f918f9', // Pink
  '#000000', // Black
];
class SimplePieChart extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      totalAmount: 0,
    };

    this.valueFormatter = this.valueFormatter.bind(this);
  }

  componentDidMount() {
    // donations :
    // --> names :
    //     --> date : donation
    const dbRef = firebase.database().ref();
    const donationsRef = dbRef.child('donations');

    donationsRef.on('value', (nameSnapshot) => {
      var data = []
      var totalAmount = 0;

      nameSnapshot.forEach((dateDonationSnapshot) => {
        var name = dateDonationSnapshot.key; // -> name
        var datesDonations = dateDonationSnapshot.val(); // -> date : donation
        var amount = Object.values(datesDonations).reduce((a, b) => a + b);
        data.push({ name: name, value: amount })

        totalAmount += amount;
      });

      // Set the state with data
      this.setState({
        data: data.sort(function(a, b) {
          return b.value - a.value;
        }),
        totalAmount: totalAmount,
      });
    });
  };

  valueFormatter(value) {
    return Math.round(value / this.state.totalAmount * 100) + " %";
  }

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie data={this.state.data} dataKey="value" innerRadius={40} outerRadius={80}>
          <Label value={"Top " + this.state.data.length} position="center" />
          {
            this.state.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Legend />
        <Tooltip formatter={this.valueFormatter} />
      </PieChart>
    );
  }
}

export default SimplePieChart;