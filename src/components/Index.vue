<template>
    <div>
        <h1>Students</h1>

        <table class="table table-hover">
            <thead>
                <tr>
                    <td>Student Id</td>
                    <td>School Year</td>
                    <td>Campus</td>
                    <td>Entry Date</td>
                    <td>Grade Level</td>
                    <td>Name</td>
                    <td>Actions</td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" v-model="student.studentID" /></td>
                    <td><input type="text" class="form-control" v-model="student.schoolYr" /></td>
                    <td><input type="text" class="form-control" v-model="student.campus" /></td>
                    <td><input type="text" placeholder="yyyy-mm-dd" class="form-control" v-model="student.entryDate" />
                    </td>
                    <td><input type="text" class="form-control" v-model="student.gradeLevel" /></td>
                    <td><input type="text" class="form-control" v-model="student.name" /></td>
                    <td><button class="btn btn-primary" v-on:click="searchStudent(student)">Search</button></td>
                </tr>
            </thead>

            <tbody>
                <tr v-for="student in students" :key="student.studentID">
                    <td>{{ student.studentID }}</td>
                    <td>{{ student.schoolYr }}</td>
                    <td>{{ student.campus }}</td>
                    <td>{{ student.entryDate }}</td>
                    <td>{{ student.gradeLevel }}</td>
                    <td>{{ student.name }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: { id: student.studentID }}" class="btn btn-primary">Edit</router-link>
                    </td>
                    <td><button class="btn btn-danger" v-on:click="deleteStudent(student.studentID)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import utilities from '../assets/security.js'
    export default {
        name: 'Index',
        data() {
            return {
                student: {},
                students: []
            }
        },
        mounted: function () {
            utilities.findUser().then(() => this.fetchStudents());
        },
        methods: {
            fetchStudents() {
                let uri = 'https://resources.joecastle.tk/students';
                this.axios.get(uri, this.$store.getters.authHeader).then((response) => {
                    this.students = response.data;
                });
            },
            deleteStudent(id) {
                let uri = 'https://resources.joecastle.tk/students/' + id;
                this.students = this.students.filter(student => student.studentID != id);
                this.axios.delete(uri, this.$store.getters.authHeader);
            },
            searchStudent(student) {
                let uri = 'https://resources.joecastle.tk/students';
                this.axios.get(uri, Object.assign({
                    params: {
                        studentID: student.studentID,
                        schoolYr: student.schoolYr,
                        campus: student.campus,
                        entryDate: student.entryDate,
                        gradeLevel: student.gradeLevel,
                        name: student.name
                    }
                }, this.$store.getters.authHeader)).then((response) => {
                    this.students = response.data;
                });
            }
        }
    }
</script>
