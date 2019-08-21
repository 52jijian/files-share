var chart = Highcharts.chart('container', {
		chart: {
				type: 'column'
		},
		title: {
				text: '高级响应式图表'
		},
		subtitle: {
				text: '请点击按钮查看坐标轴变化'
		},
		xAxis: {
				categories: ['一月', '二月', '三月', '四月', '五月', '六月',
										 '七月', '八月', '九月', '十月', '十一月', '十二月']
		},
		yAxis: {
				labels: {
						x: -15
				},
				title: {
						text: '项目'
				}
		},
		series: [{
				name: '销售',
				data: [434, 523, 345, 785, 565, 843, 726, 590, 665, 434, 312, 432]
		}],
		responsive: {
				rules: [{
						condition: {
								maxWidth: 500
						},
						// Make the labels less space demanding on mobile
						chartOptions: {
								xAxis: {
										labels: {
												formatter: function () {
														return this.value.replace('月', '')
												}
										}
								},
								yAxis: {
										labels: {
												align: 'left',
												x: 0,
												y: -2
										},
										title: {
												text: ''
										}
								}
						}
				}]
		}
});
function setSize(width) {
		chart.setSize(width, 300);
}
