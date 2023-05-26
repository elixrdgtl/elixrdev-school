'use client'

import ExButton, { ButtonType } from "@/components/basic-ui/button";
import ExPanel from "@/components/basic-ui/panel";
import { Formik, Form, Field } from "formik";
import { User, IUser } from "@/db/models/firebase/user";
import { useEffect } from "react";

export default function Register() {

    const init: Partial<IUser> = {}
    const fieldClass = "p-2 mt-2 rounded-2xl border-0"
    const fieldGroup = "flex flex-col ml-1 mt-2"
    const fieldLabel = "mr-2"

    useEffect(() => {
        insertUser().then(() => {
          console.log("inserted")
        });
    },[])

    return (
        <div>
            <div className="flex w-full justify-center items-center">
                <ExPanel extraclassname="w-full sm:w-fit" title="Register"> 
                    <Formik
                        initialValues={init}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        <Form>
                            <div className="flex flex-col mb-2">
                                <div className={fieldGroup}>
                                    <label htmlFor="email" className={fieldLabel}>Username</label>
                                    <Field required className={fieldClass} type="text" name="username" />
                                </div>
                                <div className={fieldGroup}>
                                    <label htmlFor="email" className={fieldLabel}>Email</label>
                                    <Field required className={fieldClass} type="email" name="email" />
                                </div>
                                <div className={fieldGroup}>
                                    <label htmlFor="email" className={fieldLabel}>Password</label>
                                    <Field required className={fieldClass} type="password" name="password" />
                                </div>
                                <div className={fieldGroup}>
                                    <label htmlFor="email" className={fieldLabel}>Name</label>
                                    <Field required className={fieldClass} type="text" name="name" />
                                </div>
                            </div>
                            <ExButton buttontype={ButtonType.OK} type="submit"> Submit </ExButton>
                        </Form>
                    </Formik>
                </ExPanel>
            </div>
        </div>
    )
}