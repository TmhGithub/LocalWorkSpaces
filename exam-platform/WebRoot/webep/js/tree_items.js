/* 
	the format of the tree definition file is simple,
	you can find specification in the Tigra Menu documentation at:
	
	http://www.softcomplex.com/products/tigra_menu/docs/items.html	
*/

var TREE_ITEMS = [
	['总公司', null,
		['工程1', null,
			['报告', null,
				['质量报告', 'client2_info.html'],
				['预算报告', 'http://www.163.com'],
			],
		],
	],
	['子公司', null,
		['工程2', null,
			['报告', null,
				['预算报告', 'test_1.html'],
				['质量报告', null],
			],
		],
		['报告', 'list.html'],
	]
];
