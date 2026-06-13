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
import Link from 'next/link'

const DashboardSideBar = () => {
    const navItems = [
        { icon: Circles4Square, href: "/dashboard/recruiter", label: "Dashboard" },
        { icon: Briefcase, href: "/dashboard/recruiter/jobs", label: "Jobs" },
        { icon: FileText, href: "/dashboard/recruiter/jobs/new", label: "Create A Job" },
        { icon: Factory, href: "/dashboard/recruiter/company", label: "Company Profile" },
        { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile" },
        { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" }
    ];

    const navContent = (
        <nav className="flex flex-col gap-1">
            {navItems.map(item => (
                <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                    href={item.href}
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </Link>
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