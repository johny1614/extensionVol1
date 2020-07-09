import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-data1',
  templateUrl: './sample-data1.component.html',
  styleUrls: ['./sample-data1.component.scss']
})
export class SampleData1Component implements OnInit {

  constructor() {
  }

  id = 10;

  ngOnInit(): void {
    this.obTree = this.getNodes(this.ob);
    console.log(this.obTree);
    console.log(this.nodesxD);
  }

  getNodes(baseOb) {
    console.log('baseOb', baseOb);
    let returnArr = [];
    Object.keys(baseOb).forEach(key => {
      this.id += 1;
      console.log('id', this.id);
      if (typeof baseOb[key] === 'string') {
        console.log('jest string', baseOb[key]);
        returnArr.push({ name: key, children: [], id: this.id });
      } else {
        returnArr.push({ name: key, children: [this.getNodes(baseOb[key])], id: this.id });
      }
    });
    return returnArr;
  }

  // ob2={
  //   root1:['child1','child2'],
  //   root2:['child2.1',{'child2.2',}]
  // }


  ob = {
    node3: {
      node31: [
        'node311', 'node312'
      ]
    }
  };
  options = {};
  obTree;

  nodesxD = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
}
