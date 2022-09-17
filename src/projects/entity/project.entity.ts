import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Common} from "../../entity/common";
import {ProjectTaskEntity} from "./project.task.entity";

// tslint:disable:variable-name
@Entity("project")
export class ProjectEntity extends Common {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "int",
    })
    public id: number;

    @Column("varchar", {
        length: 256,
        name: "title",
        nullable: false,
    })
    public title: string;

    @Column("text", {
        name: "description",
        nullable: true,
    })
    public description: string;

    @Column("int", {
        name: "duration",
        nullable: true,
    })
    public duration: number;

    @OneToMany(() => ProjectTaskEntity,
        (projectTaskEntity) => projectTaskEntity.project_id)
    public project_tasks: ProjectTaskEntity[];
}
