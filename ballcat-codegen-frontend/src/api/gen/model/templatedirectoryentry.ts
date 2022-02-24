/**
 * 模板目录项类型
 */
import { TemplateInfo } from '@/api/gen/model/templateinfo'

export enum TemplateEntryTypeEnum {
  // 文件夹
  FOLDER = 1,
  // 文件
  FILE = 2
}

/**
 * 模板目录项
 */
export interface TemplateDirectoryEntry {
  // ID
  id?: number
  // 模板组Id
  groupId?: number
  // 文件夹全路径/模板文件名称（支持占位符）
  fileName?: string
  // 文件类型 1：文件夹 2：模板文件
  type?: TemplateEntryTypeEnum
  // 父级Id
  parentId?: number
  // 创建时间
  createTime?: string
  // 更新时间
  updateTime?: string
}

/**
 * 模板目录项
 */
export interface TemplateDirectoryEntryDTO extends TemplateDirectoryEntry {
  templateInfo?: TemplateInfo
}

/**
 * 模板目录项
 */
export interface FileEntry {
  // 文件名
  filename: string

  // 完全文件路径
  filePath: string

  // 父级的完全文件路径
  parentFilePath: string

  // 类型 1：文件夹 2：文件
  type: TemplateEntryTypeEnum

  // 文件内容
  content: string

  // 子文件
  children?: FileEntry[]
}