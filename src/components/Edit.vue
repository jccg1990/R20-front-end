<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Student</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateStudent">
                  <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                      <li v-for="error in errors">{{ error }}</li>
                    </ul>
                  </p>
                    <div class="form-group">
                        <label>School Year:</label>
                        <input type="text" class="form-control" v-model="student.schoolYr"/>
                    </div>
                    <div class="form-group">
                        <label>Campus:</label>
                        <input type="text" class="form-control" v-model="student.campus"/>
                    </div>
                    <div class="form-group">
                        <label>Entry Date:</label>
                        <input type="text" placeholder="yyyy-mm-dd" class="form-control" v-model="student.entryDate"/>
                    </div>
                    <div class="form-group">
                        <label>Grade Level:</label>
                        <input type="text" class="form-control" v-model="student.gradeLevel"/>
                    </div>
                    <div class="form-group">
                        <label>Name:</label>
                        <input type="text" class="form-control" v-model="student.name"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Student"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import rex from '../rex.js'
export default{
        data(){
            return{
                errors: [],
                student:{}
            }
        },

        created: function(){
            this.getStudent();
        },

        methods: {
            getStudent: function(){
              let uri = 'http://R20-env-1.qmgn4swc3p.us-east-1.elasticbeanstalk.com/students/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.student = response.data;
                });
            },
            updateStudent: function(){
              this.errors = [];

              this.validateEmpty();
              this.validateValues();

              if(!this.errors.length){
                let uri = 'http://R20-env-1.qmgn4swc3p.us-east-1.elasticbeanstalk.com/students/' + this.$route.params.id;
                this.axios.put(uri, this.student).then(() => {
                  this.$router.push({name: 'Index'});
                });
              }
            },
            validateEmpty: function(){
              if (!this.student.schoolYr) {
                this.errors.push('School Year required.');
              }
              if (!this.student.campus) {
                this.errors.push('Campus required.');
              }
              if (!this.student.entryDate) {
                this.errors.push('Entry Date required.');
              }
              if (!this.student.gradeLevel) {
                this.errors.push('Grade Level required.');
              }
              if (!this.student.name) {
                this.errors.push('Name required.');
              }
              return this.errors.length;
            },
            validateValues: function(){
              if (this.student.schoolYr && !rex.SCHOOLYR.test(this.student.schoolYr)){
                this.errors.push('School Year can be only numbers');
              }

              if (this.student.campus && !rex.NUMBER.test(this.student.campus)){
                this.errors.push('Campus can be only numbers');
              }

              if (this.student.entryDate && !rex.DATE.test(this.student.entryDate)){
                this.errors.push('Please use format yyyy-mm-dd for Entry Date');
              }

              if (this.student.gradeLevel && !rex.NUMBER.test(this.student.gradeLevel)){
                this.errors.push('Grade Level can be only numbers');
              }

              if (this.student.name && !rex.WORD.test(this.student.name)){
                this.errors.push('Invalid characters at Name');
              }
            }
        }
    }
</script>
