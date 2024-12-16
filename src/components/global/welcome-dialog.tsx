"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useStore } from "@/store";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import axios from "axios";
import { Github, X } from "lucide-react";

export function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState("");

  const user = useStore((store) => store.user);
  const setUser = useStore((store) => store.setUser);

  const { toast } = useToast();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const { data } = await axios.get(`https://api.github.com/users/${login}`);
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });

      setIsOpen(false);
    } catch (err) {
      toast({
        title: "Usuário não existente!",
        description: "Por favor insira um usuário do github válido.",
        variant: "destructive",
      });
    }
  }

  function handleAccessWithoutUser() {
    setIsOpen(false);
    setUser({
      name: "Internito",
      avatar: "/avatar-fallback.png",
    });
  }

  useEffect(() => {
    if (!user) {
      setIsOpen(true);
    }

    return () => setIsOpen(false);
  }, [user]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogClose
            onClick={handleAccessWithoutUser}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </DialogClose>

          <DialogTitle className="text-2xl">Olá, investidor!</DialogTitle>
          <DialogDescription className="text-base !mt-4">
            Parece que você é novo por aqui. Antes de começarmos, me diga seu
            usuário do GitHub para podermos conectar e explorar juntos as
            maravilhas do mundo dos investimentos. 🌟
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex items-center gap-4 mt-4"
          onSubmit={handleSubmit}
        >
          <Github className="w-10 h-10" />
          <Input
            placeholder="Usuário do Github"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Button
            type="submit"
            disabled={!login}
          >
            Acessar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
