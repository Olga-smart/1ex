"use strict";

// #region Header
class Header {
  constructor(component) {
    this._initFields(component);
    this._attachEventHandlers();
  }

  _initFields(component) {
    this._component = component;
    this._burger = component.querySelector('.js-header__burger');
    this._menu = component.querySelector('.js-header__menu');
  }

  _handleBurgerClick() {
    this._burger.classList.toggle('header__burger_menu_open');
    this._menu.classList.toggle('header__menu_open');
  }

  _attachEventHandlers() {
    this._burger.addEventListener('click', this._handleBurgerClick.bind(this));
  }
}

const header = document.querySelector('.js-header');
if (header) {
  new Header(header);
}
// #endregion Header

// #region Charts

// #region Pie
const pieChart = echarts.init(document.querySelector('.js-distribution__pie-chart'), null, { renderer: 'svg' });

const pieOption = {
  series: [
    {
      type: 'pie',
      data: [
        { value: 4, name: 'PRE-SEED ROUND' },
        { value: 6, name: 'SEED ROUND' },
        { value: 4, name: 'PRIVATE ROUND' },
        { value: 15, name: 'FUTURE\nROUND' },
        { value: 12, name: 'CORE TEA' },
        { value: 6, name: 'ADVISORS' },
        { value: 10, name: 'LIQUIDITY' },
        { value: 8, name: 'MARKETING' },
        { value: 20, name: 'ECOSYSTEM\nREWARDS' },
        { value: 15, name: 'STRATEGIC\nPARTNERSHIPS' },
      ],
      color: [
        '#86A0FF',
        '#35DBE5',
        '#DBFF76',
        '#DE39B4',
        '#7E1EDE',
        '#406AFF',
        '#02BAA4',
        '#8EEA55',
        '#FF57D4',
        '#B66DFF',
      ],
      radius: ['32%', '68%'],
      label: {
        distance: 30,
        lineHeight: 21,
        formatter: '{b|{b}}\n{per|{d}%}',
        rich: {
          b: {
            fontWeight: 500,
            fontSize: 9,
            color: 'transparent',
            fontFamily: 'Cera Pro',
          },
          per: {
            fontWeight: 700,
            fontSize: 9,
            color: 'transparent',
            fontFamily: 'Cera Pro',
          }
        }
      },
      labelLine: {
        show: false,
        length: 38,
      },
      itemStyle: {
        borderColor: '#141422',
        borderWidth: 4,
      },
    },
  ],
  media: [
    {
      query: {
        minWidth: 700,
      },
      option: {
        series: [
          {
            label: {
              show: true,
              rich: {
                b: {
                  fontSize: 17,
                  color: '#fff',
                },
                per: {
                  fontSize: 17,
                  color: 'inherit',
                }
              }
            },
            radius: ['38%', '68%'],
          },
        ]        
      },
    },
  ]
};

pieChart.setOption(pieOption);

window.addEventListener('resize', function() {
  pieChart.resize();
});
// #endregion Pie

// #region Bar
let barChart = echarts.init(document.querySelector('.js-distribution__bar-chart'), null, { renderer: 'svg' });

const barOption = {
  tooltip: {},
  legend: {
    show: false,
  },
  grid: {
    left: 0,
    right: 10,
    top: 10,
    bottom: 120,
  },
  xAxis: {
    type: 'category',
    data: [
      '12.2023', 
      '01.2024', 
      '02.2024',
      '03.2024',
      '04.2024',
      '05.2024',
      '06.2024',
      '07.2024',
      '08.2024',
      '09.2024',
      '10.2024',
      '11.2024',
      '12.2024',
      '01.2025',
      '02.2025',
      '03.2025',
      '04.2025',
      '05.2025',
      '06.2025',
      '07.2025',
      '08.2025',
      '09.2025',
      '10.2025',
      '11.2025',
      '12.2025',
      '01.2026',
      '02.2026',
      '03.2026',
      '04.2026',
      '05.2026',
      '06.2026',
      '07.2026',
      '08.2026',
      '09.2026',
      '10.2026',
      '11.2026',
    ],
    axisLabel: {
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Cera Pro',
      padding: [13, 0, 0, 0],
      alignMinLabel: 'left',
    },
    axisTick: {
      interval: (value, index) => {
        if (index == 2 || index == 14 || index == 26) return true;
      },
      length: 11,
      lineStyle: {
        color: '#fff',
        opacity: 0.4,
        width: 2,
      },
    },
    axisLine: {
      show: false,
      onZero: false,
    },
    offset: 9,
  },
  yAxis: {
    splitNumber: 4,
    axisLabel: {
      inside: true,
      color: '#fff',
      margin: 0,
      showMinLabel: false,
      fontWeight: 500,
      fontFamily: 'Cera Pro',
    },
    splitLine: {
      show: false,
    }
  },
  color: [
    '#86A0FF',
    '#35DBE5',
    '#DBFF76',
    '#DE39B4',
    '#7E1EDE',
    '#406AFF',
    '#02BAA4',
    '#8EEA55',
    '#FF57D4',
    '#B66DFF',
  ],
  series: [
    {
      name: 'PRE-SEED ROUND',
      type: 'bar',
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2715000,
        4320000,
        5925000,
        7530000,
        9135000,
        10740000,
        12345000,
        13950000,
        15555000,
        17160000,
        18765000,
        20370000,
        21975000,
        23580000,
        25185000,
        26790000,
        28395000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
        30000000,
      ],
    },
    {
      name: 'SEED ROUND',
      type: 'bar',
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        3934375,
        5439063,
        6943750,
        8448438,
        9953125,
        11457813,
        12962500,
        14467188,
        15971875,
        17476563,
        18981250,
        20485938,
        21990625,
        23495313,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
        25000000,
      ],
    },
    {
      name: 'PRIVATE ROUND',
      type: 'bar',
      data: [
        1350000,
        1350000,
        1350000,
        1350000,
        4200000,
        7050000,
        9900000,
        12750000,
        15600000,
        18450000,
        21300000,
        24150000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
        27000000,
      ],
    },
    {
      name: 'FUTURE ROUND',
      type: 'bar',
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        6250000,
        12500000,
        18750000,
        25000000,
        31250000,
        37500000,
        43750000,
        50000000,
        56250000,
        62500000,
        68750000,
        75000000,
        81250000,
        87500000,
        93750000,
        100000000,
        106250000,
        112500000,
        118750000,
        125000000,
        131250000,
        137500000,
        143750000,
        150000000,
      ],
    },
    {
      name: 'CORE TEAM',
      type: 'bar',
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        5000000,
        10000000,
        15000000,
        20000000,
        25000000,
        30000000,
        35000000,
        40000000,
        45000000,
        50000000,
        55000000,
        60000000,
        65000000,
        70000000,
        75000000,
        80000000,
        85000000,
        90000000,
        95000000,
        100000000,
        105000000,
        110000000,
        115000000,
        120000000,
      ],
    },
    {
      name: 'ADVISORS',
      type: 'bar',
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2500000,
        5000000,
        7500000,
        10000000,
        12500000,
        15000000,
        17500000,
        20000000,
        22500000,
        25000000,
        27500000,
        30000000,
        32500000,
        35000000,
        37500000,
        40000000,
        42500000,
        45000000,
        47500000,
        50000000,
        52500000,
        55000000,
        57500000,
        60000000,
        60000000,
        60000000,
        60000000,
        60000000,
      ],
    },
    {
      name: 'LIQUIDITY',
      type: 'bar',
      data: [
        26000000,
        39000000,
        52000000,
        65000000,
        78000000,
        91000000,
        104000000,
        117000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
        130000000,
      ],
    },
    {
      name: 'MARKETING',
      type: 'bar',
      data: [
        2700000,
        9281250,
        15862500,
        22443750,
        29025000,
        35606250,
        42187500,
        48768750,
        55350000,
        61931250,
        68512500,
        75093750,
        81675000,
        88256250,
        94837500,
        101418750,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
        108000000,
      ],
    },
    {
      name: 'ECOSYSTEM REWARDS',
      type: 'bar',
      data: [
        0,
        6250000,
        12500000,
        18750000,
        25000000,
        31250000,
        37500000,
        43750000,
        50000000,
        56250000,
        62500000,
        68750000,
        75000000,
        81250000,
        87500000,
        93750000,
        100000000,
        106250000,
        112500000,
        118750000,
        125000000,
        131250000,
        137500000,
        143750000,
        150000000,
        156250000,
        162500000,
        168750000,
        175000000,
        181250000,
        187500000,
        193750000,
        200000000,
        200000000,
        200000000,
        200000000,
      ],
    },
    {
      name: 'STRATEGIC PARTNERSHIPS',
      type: 'bar',
      data: [
        4500000,
        13593750,
        22687500,
        31781250,
        40875000,
        49968750,
        59062500,
        68156250,
        77250000,
        86343750,
        95437500,
        104531250,
        113625000,
        122718750,
        131812500,
        140906250,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
        150000000,
      ],
    },
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 30,
    },
    {
      type: 'slider',
      height: 0,
      textStyle: {
        color: 'transparent',
      },
    }
  ],
  media: [
    {
      query: {
        minWidth: 600,
      },
      option: {
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 50,
          },
        ],
      },
    },
    {
      query: {
        minWidth: 1000,
      },
      option: {
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100,
          },
        ],
      },
    },
  ]
};

barChart.setOption(barOption);

window.addEventListener('resize', function() {
  barChart.resize();
});
// #endregion Bar

// #endregion Charts

// #region Sliders

// #region Features Slider
new Glide('.js-features__slider', {
  perView: 2.7,
  gap: 0,
  breakpoints: {
    1100: {
      perView: 2.5,
    },
    1000: {
      perView: 1.5,
    },
    700: {
      perView: 1,
    },
    500: {
      perView: 1,
      gap: 40,
    }
  }
}).mount();
// #endregion Features Slider

// #region Products Slider
new Glide('.js-products__slider', {
  perView: 2.2,
  gap: 24,
  peek: 32,
  breakpoints: {
    700: {
      perView: 1.7,
    },
    600: {
      perView: 1.4,
    },
    500: {
      perView: 1.1,
    }
  }
}).mount();
// #endregion Products Slider

// #endregion Sliders
