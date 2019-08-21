<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Student</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addStudent">
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
                        <input type="submit" class="btn btn-primary" value="Add Student"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../main.js'
export default {
  data() {
      return {
          student: {}
      }
  },
  methods: {
      addStudent() {
           let uri = 'http://R20-env-1.qmgn4swc3p.us-east-1.elasticbeanstalk.com/students/';
            this.axios.post(uri, this.student).then(() => {
              router.push({name: 'Index', force: true});
            });
        }
    }
}
</script>
