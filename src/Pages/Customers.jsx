import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../Components/Index";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent 
      toolbar={['Delete','Search']}
      editSettings={{allowEditing:true,allowDeleting:true}}
      width={'auto'}
       dataSource={customersData}
        allowPaging 
        allowSorting>
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Selection,Edit,Sort,Filter,Search]} />
      </GridComponent>
    </div>
  ); 
};

export default Customers;
