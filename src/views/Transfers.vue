<template>
  <div class="transfers">
    <h1>Transfers</h1>
    <form @submit.prevent="updateTransfers()">
      <div>
        <label>Search Type </label>
        <input v-model="searchTerms" />
      </div>
      <div>
        <label>Search RecordDate </label>
        <input v-model="searchrecordate" />
      </div>
      <button class="edit-btn" @click="updateTransfers()">
        Update transfers
      </button>
    </form>
    <div class="results">
      <transfer-row
        :key="transfer.transactionIdentifier"
        v-for="transfer in searchedTransfers"
        :transfer="transfer"
      />
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Transaction } from "@/types/types";
import TransferRow from "@/components/transferRow.vue";
import transfers from "@/assets/data";
@Component({
  name: "Transfers",
  components: { TransferRow },
})
export default class Transfers extends Vue {
  searchTerms = "";
  searchrecordate = "";
  transfers = transfers;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get searchedTransfers() {
    //console.log(this.transfers)
    if (this.searchTerms) {
      // custom search, should be improved upon
      const searchArray: Transaction[] = [];
      this.transfers.forEach((transfer: Transaction) => {
        console.log(transfer.recordDate)
        console.log(this.searchTerms)
    
        if (
          //For type
          transfer.type.toLowerCase().includes(this.searchTerms.toLowerCase())
        )
        {
          searchArray.push(transfer);
        }
      });
      return searchArray;
    }
    if (this.searchrecordate) {
      // custom search, should be improved upon
      const searchArray: Transaction[] = [];
      this.transfers.forEach((transfer: Transaction) => {
        console.log(transfer.recordDate)
        console.log(this.searchTerms)
        //used type check
         if (typeof transfer.recordDate === 'string' && transfer.recordDate.includes(this.searchrecordate.toLowerCase()))
        {
          searchArray.push(transfer);
        }
      });
      return searchArray;
    }
    return this.transfers;
  }

  mounted() {
   //this.updateTransfers()
  }

  updateTransfers(): void {
    //bij het aanroepen van deze functie wordt de "Computed function: searchedTransfers"
    //getriggerd. Deze computed functie berekent(compute - als een reactive bahaviour), direct 
    //in Vue de wijzigingen "die de returned value beinvloeden". In dit geval de inhoud van "searchArray"
    //Dus zodra er een "change of value" wordt veroorzaakt in deze returned value, dan wordt
    //dit direct in de DOM gerendered. 
    
    //default waarde
    console.log("this.transfers", this.transfers[0].recordDate)
    //1 Zodra deze loop wordt getriggerd door de update button...
    this.transfers.forEach((transfer) => {
      //deze property van het datatype "Transaction[]" wordt hier "geset"
     transfer.forgottenProperty = `Important data: ${(Math.random() * 100000000).toString().slice(1, 8)}`;
     //console.log("for each transfers", transfer.companyId)
    });
   // console.log(this.transfers[0].companyId)
 

    //2 pas dan word deze onderstaande waarde gebruikt om de "default" waarde uit - import transfers from "@/assets/data";
    //te overschrijven

    //nieuwwaarde
    this.transfers[0] = {
      splitFactor: null,
      exDate: null,
      amount: 234243342344,
      forgottenProperty :"This property of the data type Transactions is now updated..",
      companyId: "568fa387-43d1-499a-bba2-25089f5a881a",
      notes: null,
      pricePerShare: null,
      recordDate: "2021-11-02",
      securityClassId: "ab983cfe-a932-4e25-98ea-f5928a839fe1",
      securityClass: { name: "Common" },
      //NOT OLD
      state: "OLD",
      toSecurityHolderId: "dd971e7f-386b-45dd-93e1-666fbeed0a55",
      toSecurityHolder: {
        fullName: "Jeff Dunlap",
        type: "PERSON",
      },
      transactionIdentifier: "41095fdb-6b52-4257-aef8-dc523d782e53",
      positionWithinDay: 3,
      type: "ISSUE_STOCK",
    };
    // console.log(this.transfers[0].forgottenProperty);
  }
}
</script>
<style scoped lang="scss">

h1{
  text-align: right;
  color:$green-dark;
  font-weight: 800;
}
button{
  margin-left: auto;
}
.results{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
}

</style>
