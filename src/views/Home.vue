<template>
  <div class="home">
    <h1>Home</h1>
    <b-table :data="computedcalcDataColumns" :columns="columns"></b-table>
    <!-- <a class="cta" @click="popForm">
       Toggle form
    </a> -->
    <form v-if="showform" @submit.prevent>
    <h3>Add security class form</h3>
     <!-- <div>
        <label>	Authorized amount</label>
        <input type="number" placeholder="Authorized amount" min="100" @input="inputCheckinputAuthorizedAmount($event)"/>
      </div> -->
    <div>
        <label>	Authorized amount</label>
        <input type="number" placeholder="Authorized amount" v-model="inputAuthorizedAmount"  min="100" />
      </div>
     
      
  inputIssuedCapital = 0;
      <div>
        <label>Issued amount</label>
        <input placeholder="Issued amount" type="number" v-model="inputIssuedAmount"  min="100" />
      </div>
      <div>
        <label>Authorized Capital</label>
        <input  placeholder="Authorized Capital" type="number" v-model="inputAuthorizedCapital"  min="100" />
      </div>
      <div>
        <label>Issued capital</label>
        <input   placeholder="Issued capital" type="number" v-model="inputIssuedCapital"  min="100" />
      </div>
    <button class="cta"  @click="addSecurityClassDataRow">Add new class</button>
    </form>
    <!-- <div class="message" :class="{ complete: completed, 'text-danger': hasError }">
     Security class added
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator";
import { TableData } from "@/types/types";

//use refs for the const 

@Component
export default class Home extends Vue {
  //data property
  columns = [
    {
      label: "Security class",
      field: "name",
    },
    {
      label: "Authorized amount",
      field: "authorizedAmount",
    },
    {
      label: "Issued amount",
      field: "issuedAmount",
    },
    {
      label: "Authorized Capital",
      field: "authorizedCapital",
    },
    {
      label: "Issued capital",
      field: "issuedCapital",
    },
  ];

  hasError = false;
  completed = false;
  loading = false;
  showform = true;
  tableData: TableData[] = [];

  inputAuthorizedAmount= 0;
  inputIssuedAmount = 0;
  inputAuthorizedCapital= 0;
  inputIssuedCapital = 0;

  newTotalDataObject = 
    {
        id: "Total",
        name: "Series total",
        nominalValue: 1,
        authorizedAmount: 0,
        issuedAmount: 0,
        authorizedCapital: 0,
        issuedCapital: 0,
      }
    
  //computed
  get computedProp() {
    return Math.random()
  }

  get computedcalcDataColumns() {
    return this.tableData;
  }
  // mounted works fine if your ide complains about it
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    // this.getData().then((data: TableData[]) => {
    //     this.loading = true;
    //     return data.map((dataItem: TableData) => {
    //       return {
    //         ...dataItem,
    //         randomNumber: Math.random(),
    //       };
    //     });
    //   })
    //   .then((data: TableData[]) => {
    //     this.tableData = data;
    //     this.loading = false;
    //   })
    //   .catch((error) => {
    //     console.log(error, "This is not good");
    //   });

    this.initDataColumns()
    this.initDataColumns().catch((error) => {
      console.error('Error:', error);
    });
  }

  // options api methods: 
  popForm() {
    console.log("popform")
    this.showform = !this.showform
  }

  // inputCheckinputAuthorizedAmount (event:any){
  //   console.log("event input",event.target.value)
  //  return  this.inputAuthorizedAmount = event.target.value
  // }
  // inputCheckinputIssuedAmount (event:any){
  //   console.log("event input")
  //  return this.inputIssuedAmount = event.target.value
  // }
  // inputCheckinputAuthorizedCapital (event:any){
  //   console.log("event input")
  //  return this.inputAuthorizedCapital = event.target.value
  // }
  // inputCheckinputIssuedCapital(event:any){
  //   console.log("event input")
  //  return this.inputIssuedCapital = event.target.value
  // }

  addSecurityClassDataRow() {
    this.completed = !this.completed
    console.log("addSecurityClassDataRow", this.tableData.length)
    const newrowposition = this.tableData.length - 1;
    const series = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomSerie = series[Math.floor(Math.random() * series.length)];
    const newSecurityObject = 
    {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f0688",
        name: `Series ${randomSerie}`,
        nominalValue: 5,
        authorizedAmount: Number(this.inputAuthorizedAmount),
        issuedAmount: Number(this.inputIssuedAmount),
        authorizedCapital: Number(this.inputAuthorizedCapital),
        issuedCapital: Number(this.inputIssuedCapital),
      }

      
      //create random default values
      if (newSecurityObject.authorizedAmount == 0) {
         newSecurityObject.authorizedAmount = Math.floor(Math.random()*10000)
      }
      if (newSecurityObject.issuedAmount == 0) {
         newSecurityObject.issuedAmount = Math.floor(Math.random()*10000)
      }
      if (newSecurityObject.authorizedCapital == 0) {
         newSecurityObject.authorizedCapital = Math.floor(Math.random()*10000)
      }
      if (newSecurityObject.issuedCapital == 0) {
         newSecurityObject.issuedCapital = Math.floor(Math.random()*10000)
      }

      this.tableData.splice(newrowposition, 0, newSecurityObject);
      this.calcDataColumns(this.tableData)
  }


  addTotalDataRow() {
    const newrowposition = this.tableData.length;
    this.tableData.splice(newrowposition, 0, this.newTotalDataObject);
  }

  async fetchData() {
      const response = await this.getData();
      //console.log(response);
      const data = await response;
      this.tableData = data; 
      //console.log(data);
      return data;
  }
  
  //Make it async because using await
    async initDataColumns() {
      //console.log("initDataColumns()", this.tableData.length  );
      //first get the fetched data promise with await
      const response = await this.fetchData();
      this.tableData = response;
      //add the total row
      this.addTotalDataRow()
      //calc the total data
      this.calcDataColumns(this.tableData)
    }

    async calcDataColumns(arg:TableData[]) {
      const lastIndex = arg.length-1;
      this.newTotalDataObject.authorizedAmount= 0;
      this.newTotalDataObject.issuedAmount = 0;
      this.newTotalDataObject.authorizedCapital  = 0;
      this.newTotalDataObject.issuedCapital = 0;
      for (let index = 0; index < lastIndex; index++) {
        this.newTotalDataObject.authorizedAmount += arg[index].authorizedAmount;
        this.newTotalDataObject.issuedAmount += arg[index].issuedAmount;
        this.newTotalDataObject.authorizedCapital += arg[index].authorizedCapital;
        this.newTotalDataObject.issuedCapital+= arg[index].issuedCapital;
      }
    }


  //async getData(): Promise<TableData[]> {
  getData(){
    return [
      {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f06",
        name: "Series A",
        nominalValue: 5,
        authorizedAmount: 1500,
        issuedAmount: 500,
        authorizedCapital: 7550,
        issuedCapital: 2500,
      },
      {
        id: "42f2462d-49d0-4e91-8fe1-de2e656b0f06",
        name: "Series B",
        nominalValue: 10,
        authorizedAmount: 15000,
        issuedAmount: 5000,
        authorizedCapital: 150000,
        issuedCapital: 50000,
      },
      {
        id: "fd78c11b-e3d2-455a-99b0-49907a75c463",
        name: "Series C",
        nominalValue: 1,
        authorizedAmount: 96876,
        issuedAmount: 61760,
        authorizedCapital: 96876,
        issuedCapital: 61760,
      },
      {
        id: "d8654cb0-8986-4fbc-b969-025e514cb934",
        name: "Series D",
        nominalValue: 1,
        authorizedAmount: 10110,
        issuedAmount: 1100,
        authorizedCapital: 10110,
        issuedCapital: 1100,
      }
    ];
  }
}
</script>
<style lang="scss">
@import "../assets/scss/variables.scss";
button{
 margin-left: auto;
cursor: pointer;
}
</style>
