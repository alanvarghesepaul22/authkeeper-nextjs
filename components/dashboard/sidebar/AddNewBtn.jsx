"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
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
import { Label } from "@/components/ui/label";
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

const AddNewBtn = ({ title, variant }) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(newPassformSchema),
    defaultValues: {
      siteName: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    await fetch("/api/addNewPass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        siteName: data.siteName,
        username: data.username,
        password: data.password,
      }),
    })
      .then(() => {
        toast({
          variant: "success",
          title: "Password added!.",
          description: "You've successfully added a new password.",
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
            className={cn(
              "group flex justify-start gap-x-3 p-2 text-sm tracking-wide leading-6"
            )}
            variant={variant}
            title="Add new"
          >
            <IoAddCircleOutline className="h-6 w-6 shrink-0" />
            {title && <p className="hidden md:flex">{title}</p>}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Password</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
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
                            placeholder="eg: Facebook"
                            {...field}
                            className="col-span-3"
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
                            placeholder="Username / Email"
                            {...field}
                            className="col-span-3"
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
                          <Input {...field} className="col-span-3" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Passsword</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewBtn;
