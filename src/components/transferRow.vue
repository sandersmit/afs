<template>
  <div class="transfer-row" :class="{ __IAC:iac, __issueStock:issueStock, __TRANSFER:trans}">
    <!-- <h4 v-for="(value, propertyName) in transfer">
      {{ propertyName }}: {{ value }}
    </h4> -->
    <!-- <h4>{{ transfer.fromSecurityHolder }}</h4> -->
    <section>
      <div>
        <p class="transfer-row__amount">AMOUNT: <span>{{ transfer.amount }}</span></p>
        <p class="type">TYPE: {{ transfer.type }}</p>
      </div>
    <div>
      <p class="transfer-row__state">STATE <span>{{ transfer.state }}</span></p>
    </div>
    </section>
        <div class="importantData">
            <span v-if="transfer.forgottenProperty">{{transfer.forgottenProperty}}</span>
            <span v-else>No important data: Please check update</span>
        </div>
    <p class="transfer-row__recorddate"> RecordDate:  <span>{{ transfer.recordDate }}</span></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Transaction } from "@/types/types";

@Component({
  name: "TransferRow",
})
export default class TransferRow extends Vue {
  @Prop({ required: true }) transfer!: Transaction;
 
  issueStock=false
  iac=false
  trans=false
  
  checkType(){
    console.log(this.transfer.type)
    if(this.transfer.type==="ISSUE_STOCK"){
     this.issueStock=true;
    }
    else if(this.transfer.type==="INCREASE_AUTHORIZED_CAPITAL"){
      this.iac=true;
    }
    else if(this.transfer.type==="TRANSFER"){
      this.trans=true;
    }
  }
  mounted() {
    this.checkType()
  }
}

</script>

<style lang="scss">
.transfer-row {
  
    width: 100%;
    text-align: left;

    section{
      display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    }

 &.__issueStock{
  border-left: 0.5rem solid #BA64C5;
  span{
      &:before{
        background-color: #BA64C5;
      }
    }
 }
 &.__IAC{
 border-left: 0.5rem solid #53A43E;
  span{
      &:before{
        background-color:  #53A43E;
      }
    }
 }
 &.__TRANSFER{
  border-left: 0.5rem solid #F8A71A;
  span{
      &:before{
        background-color:  #F8A71A;
      }
    }
 }
 border-radius: 5px;
  margin: 0.5rem 0rem;
  max-width: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  background-color:#FDFDFD;
  color: #606163;
  font-size: 1rem;
  &__recorddate{
    border-top: dashed 1px #8e8f92;
    color: #8e8f92;
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;
    font-size: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    span{
      margin-left: 0.5rem;
    }

  }
  &__amount{
    font-size: 1.2rem;
  }
  &__state {
    color: #8e8f92;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 0.8rem;
    text-align: right;
    line-height: 1.3rem;
    span{
      &:before{
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 5px;
        position: relative;
        display: inline-block;
        border-radius: 100%
      }
    }
  }
  .importantData{
    span{
      font-size: 0.8rem;
      font-style: italic;
      font-weight: 100;    
    } 
  }
  span{
    font-weight: 800;
      color: #3f4041;
    }
}
</style>
