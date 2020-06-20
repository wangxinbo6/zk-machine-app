<template>
  <div>
    <b-container style="position:relative;padding-top:20px" >
      <div @click="addShow=!addShow" style="
        position: absolute;
        top: 0px;
        right: 15px;
        padding: 0 10px 4px;
        background: #17a2b8;
        color: #fff;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        cursor: pointer;">添加角色
        <b-icon icon="chevron-double-down" aria-hidden="true" v-show="!addShow"></b-icon>
        <b-icon icon="chevron-double-up" aria-hidden="true" v-show="addShow"></b-icon>
      </div>
      <transition name="slide-fade">
        <div style="width:200px" class="mt-3 mb-3 addContent " v-if="addShow">
          <b-input-group size="sm" prepend="姓  名" class="mb-1">
            <b-input v-model="add.name"></b-input>
          </b-input-group>
          <b-input-group size="sm" prepend="电  话" class="mb-1">
            <b-input v-model="add.mobile"></b-input>
          </b-input-group>
          <b-input-group size="sm" prepend="密  码" class="mb-1">
            <b-input v-model="add.password"></b-input>
          </b-input-group>
          <b-input-group size="sm" prepend="职  位" class="mb-1">
            <b-form-select v-model="add.job" :options="add.jobs" size="sm" ></b-form-select>
          </b-input-group>
          <b-button size="sm" class="fr" variant="info" style="width:100px" @click="addSubmit">添加</b-button>
          <p class="clear"></p>
        </div>
      </transition>
     
      <b-input-group class="mt-3 mb-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info">查找</b-button>
        </b-input-group-append>
      </b-input-group>

      <b-table responsive :stickyColumn=true :items="items" :fields="fields" striped class="manageTable" >
        <template v-slot:cell(姓名)="row">
          {{row.item.first_name}}
        </template>
        <template v-slot:cell(电话号)="row" >
          <b-input v-model="row.item.last_name" size="sm" ></b-input>
        </template>
        <template v-slot:cell(密码)="row" >
          <b-input v-model="row.item.password" :type="type" size="sm" ></b-input>
        </template>
         <template v-slot:cell(职位)="row">
          <b-form-select v-model="row.item.relo" :options="row.item.relos" size="sm" ></b-form-select>
        </template>
        <template v-slot:cell(按钮)="row">
          <b-button size="sm" variant="primary" @click="row.item.toggleDetails" >
            确定
          </b-button>
        </template>
      </b-table>
      <div class="overflow-auto" style="margin:14px 0;">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          align="center"
        ></b-pagination>
      </div>
    </b-container>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        addShow:false,
        perPage: 3,
        type:'text',
        add:{
          name:'11',
          password:'123',
          mobile:'333',
          jobs:[
            { value: 'xx', text: '商务员' },
            { value: 'qq', text: '财务员' },
            { value: 'ww', text: '审核员' },
          ],
          job:'xx',
        },
       
        currentPage: 1,
        rows: 10,
        fields: ['姓名', '电话号','密码','职位', '按钮'],
        items: [
          { first_name: 'Dickerson',password:'xxxxxx', last_name: '111111111',relo:'xx',relos: [
          { value: 'xx', text: '商务员' },
          { value: 'qq', text: '财务员' },
          { value: 'ww', text: '审核员' },
        ] },
          { first_name: 'Larsen',password:'xxxxxx', last_name: '222222222',relo:'xx',relos: [
          { value: 'xx', text: '商务员' },
          { value: 'qq', text: '财务员' },
          { value: 'ww', text: '审核员' },
        ] },
         
          { first_name: 'Jami',password:'xxxxxx', last_name: '3333323333',relo:'qq',relos: [
          { value: 'xx', text: '商务员' },
          { value: 'qq', text: '财务员' },
          { value: 'ww', text: '审核员' },
        ] }
        ]
      }
    },
    methods:{
      addSubmit(){
      
        if(this.add.name ==''){
          this.$message({
            message: '姓名不能为空',
            center: true,
            type: 'warning'
          });
        }else if(this.add.mobile ==''){
          this.$message({
            message: '电话不能为空',
            center: true,
            type: 'warning'
          });
        }else if(this.add.password ==''){
          this.$message({
            message: '密码不能为空',
            center: true,
            type: 'warning'
          });
        }else{
          this.$message({
            message: '添加成功',
            center: true,
            type: 'success'
          });
          this.add.name = '',
          this.add.mobile = '',
          this.add.password = '',
          this.add.job = 'xx'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-table{
    width: 800px;
  }
  @media(max-width: 1200px){
    .addContent{
      
      width: 100%!important;
    }
  }
  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>