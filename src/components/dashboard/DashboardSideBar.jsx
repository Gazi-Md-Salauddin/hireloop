"use client"

import {
    Bars,
    Briefcase,
    FileText,
    Gear,
    Circles4Square,
    Factory,
    Person
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

const DashboardSideBar = () => {
    const navItems = [
        { icon: Circles4Square, label: "Dashboard" },
        { icon: Factory, label: "My Company" },
        { icon: Briefcase, label: "Manage Jobs" },
        { icon: FileText, label: "Applications" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" }
    ];

    const navContent = (
        <nav className="flex flex-col gap-1">
            {navItems.map(item => (
                <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
            ))}
        </nav>
    );

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <Bars />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Dashboard</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>{navContent}</Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}
export default DashboardSideBar