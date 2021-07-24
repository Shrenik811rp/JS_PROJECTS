
//calling draw chart function
draw_chart()

async function draw_chart() {
	//we wait for data to get loaded asynchronously
	const avg_temp_data = await getData()
	//display the graph on the chart id
	const graph = document.getElementById('chart');

	//draw chart with given data and features
	const myChart = new Chart(graph, {
		type: 'line',
		data: {
			//xlabel contains the year timeline
			labels: avg_temp_data.x_year,
			datasets: [{
				label: 'Combined Land-Surface Air and Sea-Surface Water Temperature (C°)',

				//contains the ylabel which is avg temp
				data: avg_temp_data.y_temp,
				backgroundColor:
					'rgba(255, 99, 132, 0.2)',
				borderColor: [
					'rgba(174, 128, 209, 1)',
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					ticks: {
						callback: function (value) {
							return value + '°';
						}
					}
				}
			}
		}

	});
}

//function to get data from csv file
async function getData() {

	//array which will hold all years
	const x_year = []
	//array which will hold mean temp diff 
	const y_temp = []
	//fetch the data from the csv file
	const response = await fetch('test.csv')

	//parse the csv file into text format
	//triming out any white spaces in the dataset using "trim()"
	const csv_data = await (await response.text()).trim()

	//split the text into rows by newline
	//removing the top heading row using "slice(1)"
	const csv_table = csv_data.split('\n').slice(1)

	//displaying original csv data
	console.log(`Csv data from nasa :\n ${csv_data}`)

	//
	console.log(`\n\nAfter splitting data by '\n':\n\n ${csv_table}`)

	//to get each row
	csv_table.forEach(row => {
		//split each row by commas
		const column = row.split(',')

		const year_elem = column[0]
		//push data into array
		x_year.push(year_elem)


		const temperature_elem = column[1]
		//parse data from string to float to get average
		y_temp.push(parseFloat(temperature_elem) + 14)
		//console.log(`Row : ${row}`)
		console.log(column)
		console.log(`Year & temp : ${year_elem} ${temperature_elem}`)
	})
	//return an object data of year and temp
	return { x_year, y_temp }

}

