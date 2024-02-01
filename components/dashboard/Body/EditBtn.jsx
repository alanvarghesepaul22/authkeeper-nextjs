import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPassformSchema } from "@/validators/PasswordFormValidation";
import { useRouter } from "next/navigation";
import FormBtn from "../Form/FormBtn";
import { Button } from "@/components/ui/button";
import { decrypt } from "@/utils/encryptionHandler";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const EditBtn = ({ id }) => {
  const [data, setData] = useState([]);
  const [orgPassword, setOrgPassword] = useState();
  const [username, setUsername] = useState();

  const [sitename, setSitename] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [passDisabled, setPassDisabled] = useState(true);

  const router = useRouter();
  const { toast } = useToast();
  useEffect(() => {
    const getPasswordById = async (id) => {
      try {
        const res = await fetch(`http://localhost:3000/api/addNewPass/${id}`, {
          catch: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch password");
        }
        const data = await res.json();
        // setData(data);
        setSitename(data.siteName);
        setUsername(data.username);
        setOrgPassword(data.password);
      } catch (error) {
        console.log(error);
      }
    };
    getPasswordById(id);
  }, []);

  const toggleVisibility = async (e) => {
    e.preventDefault();

    await fetch("/api/decryptPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        iv: data.iv,
      }),
    })
      .then(async (res) => {
        const data = await res.text();
        setOrgPassword(data);
        setShowPassword(!showPassword);
        if (passDisabled) {
          setPassDisabled(false);
        } else {
          setPassDisabled(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const form = useForm({
    resolver: zodResolver(newPassformSchema),
    defaultValues: {
      siteName: "",
      username: "",
      password: orgPassword,
    },
  });

  async function onSubmit(fieldData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await fetch(`http://localhost:3000/api/addNewPass/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        siteName: fieldData.siteName,
        username: fieldData.username,
        password: fieldData.password,
      }),
    })
      .then(() => {
        toast({
          variant: "success",
          title: "Password updated!.",
          description: "You've successfully updated password.",
        });
        form.reset();
        router.refresh();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: error,
        });
      });
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full flex justify-start"
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Details</DialogTitle>
            <DialogDescription>
              Make changes to your password here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6 py-4 px-2">
                <div className="grid grid-rows gap-3">
                  <FormField
                    control={form.control}
                    name="siteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="col-span-3"
                            onChange={(e) => {
                              setSitename(e.target.value);
                            }}
                            // value={data.siteName}
                            value={sitename}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-rows gap-3">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username / Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="col-span-3"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            // value={data.username}
                            value={username}
                          />
                        </FormControl>
                        <FormDescription>
                          This can be username or email.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-rows gap-3">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="flex gap-3">
                            <Input
                              type={showPassword ? "text" : "password"}
                              {...field}
                              className="col-span-3"
                              onChange={(e) => {
                                setOrgPassword(e.target.value);
                              }}
                              value={orgPassword}
                              disabled={passDisabled}
                            />
                            <Button variant="ghost" onClick={toggleVisibility}>
                              {showPassword ? (
                                <IoEyeOutline className="duration-500" />
                              ) : (
                                <IoEyeOffOutline className="duration-500" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <DialogFooter>
                <FormBtn
                  isSubmitting={form.formState.isSubmitting}
                  title="Save Changes"
                  waitTitle="Saving"
                />
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditBtn;
