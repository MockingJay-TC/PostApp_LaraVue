<template>
    <v-data-table
        :headers="headers"
        :items="posts"
        sort-by="description"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>My Posts</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                        >
                            New Post
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>
                        <v-form :action="postUrl" method="POST">
                            <v-card-text>
                                <input
                                    type="hidden"
                                    name="_token"
                                    :value="csrf_token"
                                />
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field
                                                v-model="editedItem.title"
                                                label="Post title"
                                                name="title"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="6">
                                            <v-text-field
                                                v-model="editedItem.user_id"
                                                label="User_id"
                                                name="user_id"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field
                                                v-model="editedItem.description"
                                                label="Description"
                                                name="description"
                                            ></v-text-field>
                                        </v-col>

                                        <!-- <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col> -->
                                        <!-- <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col> -->
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="close"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text type="submit">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5"
                            >Are you sure you want to delete this
                            item?</v-card-title
                        >
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="closeDelete"
                                >Cancel</v-btn
                            >
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="deleteItemConfirm"
                                >OK</v-btn
                            >
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>
<script>
export default {
    props: ["postUrl", "posts", "csrf_token", "destroy-url"],
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: "Title",
                align: "start",
                sortable: false,
                value: "title"
            },
            { text: "Description", value: "description" },
            { text: "User_id", value: "user_id" },
            // { text: 'Carbs (g)', value: 'carbs' },
            // { text: 'Protein (g)', value: 'protein' },
            { text: "Actions", value: "actions", sortable: false }
        ],

        editedIndex: -1,
        editedItem: {
            title: "",
            description: ""
        },
        defaultItem: {
            title: "",
            description: ""
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Post" : "Edit Post";
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            console.log("viccc")
            val || this.closeDelete();
        }
    },

    created() {},

    methods: {
        initialize() {
            posts: {
            }
        },

        victor() {
            console.log("hi");
        },

        editItem(item) {
            console.log("hi");
            this.editedIndex = this.posts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            console.log("hi");
            this.editedIndex = this.posts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            console.log("hi");
            // this.posts.splice(this.editedIndex, 1);
            // this.closeDelete();
        },

        close() {
            console.log("hi");
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {}
    }
};
</script>
